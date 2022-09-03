import style from "./App.module.css";

import Editor from "./editor/Editor";
import Setting from "./setting/Setting";
import Templates from "./templates/Templates";

function App() {
    return (
        <div className={style.wrapper}>
            <Setting></Setting>
            <Editor></Editor>
            <Templates></Templates>
        </div>
    );
}

export default App;
