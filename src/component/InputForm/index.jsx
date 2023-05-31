import styles from  "./style.module.css";

export const InputForm = (props) => {
    const { placeholder, inputValue, KeyDown } = props;
    
    return (
        <input className={styles.input}
        type="text" 
        value={inputValue}
        placeholder={placeholder}
        onKeyDown={KeyDown}
        // onChange={handleChangeValue}
        />
    )
};