import styles from  "./style.module.css";

export const InputForm = (props) => {
    const { placeholder, inputValue, KeyDown, changeValue } = props;
    
    return (
        <input className={styles.input}
        type="text" 
        value={inputValue}
        placeholder={placeholder}
        onKeyDown={KeyDown}
        onChange={changeValue}
        />
    );
};