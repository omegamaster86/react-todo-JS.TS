import "./style.css";
import { useState } from "react";

const AddTodo = () => {
    const [text, setText] = useState("New Todo")
    return (
        <input type="text" value={text}
         onChange={(e) => setText(e.target.value)}/>
    )
};

export default AddTodo;
