import { Image as ImageKonva } from "react-konva";
import useImage from "use-image";

export default function Background({ shapeProps }) {
    const [image] = useImage(shapeProps.url);

    return (
        <ImageKonva
            width={window.innerWidth / 2}
            height={window.innerHeight}
            image={image}
            {...shapeProps}
        ></ImageKonva>
    );
}

export function BackgroundSetting() {
    return <div>Background</div>;
}
