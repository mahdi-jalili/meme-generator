import { useState, useEffect, createContext } from "react";

import Text from "../components/text/Text";
import Image from "../components/image/Image";
import Background from "../components/background/Background";

const templates = [
    {
        id: "12445",
        name: "drake-hotline-bling",
        components: [
            {
                id: "1",
                component: Background,
                url: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
            },
            {
                id: "2",
                component: Image,
                url: "https://konvajs.github.io/assets/yoda.jpg",
                x: 50,
                y: 50,
            },
            {
                id: "3",
                component: Text,
                text: "سش سلام سشی سشی شسی شسی شسی ",
                fontSize: 42,
                fontStyle: "bold",
                align: "right",
                stroke: "white",
                strokeWidth: 1,
                fill: "black",
                x: 50,
                y: 50,
            },
        ],
    },
];

export const TemplatesContext = createContext();

export const TemplatesProvider = (props) => {
    const templatesContext = {};

    templatesContext.templates = useState(templates);
    templatesContext.selectedTemplate = useState(templates[0]);
    templatesContext.components = useState(templates[0].components);

    return <TemplatesContext.Provider value={templatesContext}>{props.children}</TemplatesContext.Provider>;
};
