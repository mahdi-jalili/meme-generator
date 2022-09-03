import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { TemplatesProvider } from "./context/TemplateContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TemplatesProvider>
            <App />
        </TemplatesProvider>
    </React.StrictMode>
);

document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
