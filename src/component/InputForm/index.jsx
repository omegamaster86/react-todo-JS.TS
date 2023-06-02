import styles from  "./style.module.css";

export const InputForm = (props) => {
    const { placeholder, inputValue, enteredTodo, changeValue } = props;
    
    return (
        <input className={styles.input}
        type="text" 
        value={inputValue}
        placeholder={placeholder}
        onKeyDown={enteredTodo}
        onChange={changeValue}
        />
    );
};