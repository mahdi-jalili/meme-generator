import style from "./text.module.css";

import { useEffect, useRef } from "react";

import { Text as TextKonva, Transformer } from "react-konva";

import { uid } from "uid";

export default function Text({ shapeProps, onSelect, isSelected, onChange }) {
    const shapeRef = useRef();
    const trRef = useRef();

    useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
            <TextKonva
                onTap={onSelect}
                onClick={onSelect}
                ref={shapeRef}
                {...shapeProps}
                draggable
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransform={(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: Math.max(5, node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                    });
                }}
            ></TextKonva>
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                ></Transformer>
            )}
        </>
    );
}

export function TextSetting({ onChange, component }) {
    const onInputsChange = (e) => {
        console.log(component);
        var copyComponent = component;
        copyComponent[e.target.attributes.name.value] = e.target.value;
        onChange(copyComponent);
    };

    return (
        <div className={`${style.setting} widget`}>
            <div>
                <label className="label">متن:</label>
                <input
                    name="text"
                    type="text"
                    value={component.text}
                    onChange={(e) => onInputsChange(e)}
                    className="input"
                ></input>
            </div>
            <div>
                <label className="label">سایز متن:</label>
                <input
                    name="fontSize"
                    type="number"
                    value={component.fontSize}
                    onChange={(e) => onInputsChange(e)}
                    className="input"
                ></input>
            </div>
            <div>
                <label className="label">رنگ:</label>
                <input
                    name="fill"
                    type="text"
                    value={component.fill}
                    onChange={(e) => onInputsChange(e)}
                    className="input"
                ></input>
            </div>
        </div>
    );
}

export function TextDefault({ onClick }) {
    const def = {
        id: uid(),
        component: Text,
        componentSetting: TextSetting,
        text: "متن جدید",
        fontSize: 42,
        lineHeight: 1.1,
        fontStyle: "bold",
        fontFamily: "Vazirmatn",
        align: "right",
        // stroke: "white",
        // strokeWidth: 10,
        fill: "black",
        width: 180,
        height: 44,
        x: 10,
        y: 10,
    };

    return (
        <button
            className={`${style.button} widget`}
            onClick={() => {
                onClick(def);
            }}
        >
            اضافه کردن متن
        </button>
    );
}
