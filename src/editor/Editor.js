import style from "./Editor.module.css";

import { useState, useEffect, useContext } from "react";

import { Stage, Layer, Label } from "react-konva";

import { TemplatesContext } from "../context/TemplateContext";

export default function Editor() {
    const templatesContext = useContext(TemplatesContext);
    const [components, setComponents] = templatesContext.components;
    const [selectedId, setSelectedId] = useState();

    useEffect(() => {
        console.log(components);
    }, [components]);

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
        }
    };

    return (
        <div className={style.wrapper}>
            <Stage
                width={window.innerWidth / 2}
                height={window.innerHeight}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
            >
                <Layer>
                    <Label></Label>
                    {components.map((component, index) => (
                        <component.component
                            key={`key-${index}`}
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
