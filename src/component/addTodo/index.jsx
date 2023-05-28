import "./style.css";
import { useState } from "react";

const AddTodo = () => {
    const [text, setText] = useState("")
    return (
        <input type="text" 
        value={text}
        placeholder={"New Todo"}
        onChange={(e) => setText(e.target.value)}/>
    )
};

export default AddTodo;
