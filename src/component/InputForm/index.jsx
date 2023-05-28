import styles from  "./style.module.css";

export const InputForm = (props) => {
    const { placeholder, inputValue } = props;
    
    return (
        <input className={styles.input}
        type="text" 
        value={inputValue}
        placeholder={placeholder}
        // onChange={(e) => setText(e.target.value)}
        />
    )
};