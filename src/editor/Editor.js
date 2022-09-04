import style from "./Editor.module.css";

import { useState, useEffect, useContext } from "react";

import { Stage, Layer, Label } from "react-konva";

import { TemplatesContext } from "../context/TemplateContext";

export default function Editor() {
    const templatesContext = useContext(TemplatesContext);

    const [components, setComponents] = templatesContext.components;
    const [selectedTemplate] = templatesContext.selectedTemplate;
    const [selectedId, setSelectedId] = useState();

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
        }
    };

    return (
        <div className={style.wrapper}>
            <Stage
                width={(window.innerHeight - 40) * selectedTemplate.ratio}
                height={window.innerHeight - 40}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
                className={`${style.stage} widget`}
            >
                <Layer>
                    <Label></Label>
                    {components.map((component, index) => (
                        <component.component
                            width={(window.innerHeight - 40) * selectedTemplate.ratio}
                            height={window.innerHeight - 40}
                            key={`key-${component.id}`}
                            shapeProps={component}
                            isSelected={component.id === selectedId}
                            onSelect={() => {
                                setSelectedId(component.id);
                            }}
                            onChange={(newData) => {
                                const newComponents = components.slice();
                                newComponents[index] = newData;
                                setComponents(newComponents);
                            }}
                        ></component.component>
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}
