import "./style.css";
import { useState } from "react";

const SearchKeyword = () => {
    const [text, setText] = useState("")
    return (
        <input 
        className="SearchKeyword" 
        type="text" 
        value={text}
        placeholder={"SearchKeyword"}
        onChange={(e) => setText(e.target.value)}
        />
    )
};

export default SearchKeyword;