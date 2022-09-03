import { useState, useEffect, createContext } from "react";

import Text, { TextSetting } from "../components/text/Text";
import Image, { ImageSetting } from "../components/image/Image";
import Background, { BackgroundSetting } from "../components/background/Background";

// components: [
//     {
//         id: "1",
//         component: Background,
//         componentSetting: BackgroundSetting,
//         url: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
//     },
//     {
//         id: "2",
//         component: Image,
//         componentSetting: ImageSetting,
//         url: "https://konvajs.github.io/assets/yoda.jpg",
//         x: 50,
//         y: 50,
//     },
//     {
//         id: "3",
//         component: Text,
//         componentSetting: TextSetting,
//         text: "سش سلام سشی سشی شسی شسی شسی ",
//         fontSize: 42,
//         fontStyle: "bold",
//         align: "right",
//         stroke: "white",
//         strokeWidth: 1,
//         fill: "black",
//         x: 50,
//         y: 50,
//     },

const templates = [
    {
        id: "12446",
        name: "Batman-Slapping-Robin",
        image: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg",
        components: [
            {
                id: "1",
                component: Background,
                componentSetting: BackgroundSetting,
                url: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg",
            },
        ],
    },
    {
        id: "12445",
        name: "Drake-Hotline-Bling",
        image: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
        components: [
            {
                id: "1",
                component: Background,
                componentSetting: BackgroundSetting,
                url: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
            },
            {
                id: "2",
                component: Text,
                componentSetting: TextSetting,
                text: "بشینم متن اپیزود بنویسم",
                fontSize: 42,
                fontStyle: "bold",
                align: "right",
                // stroke: "white",
                strokeWidth: 1,
                fill: "black",
                width: 200,
                height: 100,
                x: 400,
                y: 100,
            },
            {
                id: "3",
                component: Text,
                componentSetting: TextSetting,
                text: "بشینم میم ساز بسازم",
                fontSize: 42,
                fontStyle: "bold",
                align: "right",
                // stroke: "white",
                strokeWidth: 1,
                fill: "black",
                width: 200,
                height: 100,
                x: 400,
                y: 450,
            },
        ],
    },
    {
        id: "12447",
        name: "Hide-the-Pain-Harold.jpg",
        image: "https://imgflip.com/s/meme/Hide-the-Pain-Harold.jpg",
        components: [
            {
                id: "1",
                component: Background,
                componentSetting: BackgroundSetting,
                url: "https://imgflip.com/s/meme/Hide-the-Pain-Harold.jpg",
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

    useEffect(() => {
        templatesContext.components[1](templatesContext.selectedTemplate[0].components);
    }, [templatesContext.selectedTemplate[0]]);

    return <TemplatesContext.Provider value={templatesContext}>{props.children}</TemplatesContext.Provider>;
};
