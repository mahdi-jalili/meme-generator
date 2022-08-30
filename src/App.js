import { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import Konva from "konva";

import Text from "./components/text/Text";
import Image from "./components/image/Image";

const shapes = [
    {
        component: Text,
        text: "سش سلام سشی سشی شسی شسی شسی ",
        fontSize: 32,
        x: 50,
        y: 50,
        id: "1",
    },
    {
        component: Image,
        url: "https://konvajs.github.io/assets/yoda.jpg",
        x: 50,
        y: 50,
        filters: [Konva.Filters.Blur],
        blurRadius: 100,
        id: "2",
    },
];

function App() {
    const [components, setComponents] = useState(shapes);
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
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Stage
                width={700}
                height={500}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
                style={{ backgroundColor: "white" }}
            >
                <Layer>
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

export default App;
