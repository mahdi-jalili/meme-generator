import { useState, useEffect, createContext } from "react";

import Text, { TextSetting, TextDefault } from "../components/text/Text";
import Image, { ImageSetting, ImageDefault } from "../components/image/Image";
import Background, { BackgroundSetting, BackgroundDefault } from "../components/background/Background";

const componentList = [
    {
        component: TextDefault,
    },
    {
        component: ImageDefault,
    },
    {
        component: BackgroundDefault,
    },
];

const templates = [
    {
        id: "1",
        name: "Batman-Slapping-Robin",
        image: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg",
        ratio: 1,
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
        id: "2",
        name: "Drake-Hotline-Bling",
        image: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
        ratio: 1,
        components: [
            {
                id: "1",
                component: Background,
                componentSetting: BackgroundSetting,
                url: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
            },
        ],
    },
    {
        id: "3",
        name: "Hide-the-Pain-Harold.jpg",
        image: "https://imgflip.com/s/meme/Hide-the-Pain-Harold.jpg",
        ratio: 0.8,
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

    templatesContext.componentList = componentList;
    templatesContext.templates = useState(templates);
    templatesContext.selectedTemplate = useState(templates[0]);
    templatesContext.components = useState(templates[0].components);

    useEffect(() => {
        templatesContext.components[1](templatesContext.selectedTemplate[0].components);
        console.log(templatesContext.selectedTemplate[0]);
    }, [templatesContext.selectedTemplate[0]]);

    // useEffect(() => {
    //     console.log("components updated", templatesContext.components[0]);
    // }, [templatesContext.components[0]]);

    return <TemplatesContext.Provider value={templatesContext}>{props.children}</TemplatesContext.Provider>;
};
