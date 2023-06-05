import styles from  "./style.module.css";
import { InputForm } from "../atoms/InputForm/index";

export const AddTodo = (props) => {

    const { addInputValue, addTodo, onChangeTodo } = props;
    return (
        <>
            <h2 className={styles.subTitle}>ADD TODO</h2>
            <InputForm
            placeholder={"New Todo"}
            inputValue={addInputValue}
            // エンター押下処理
            enteredTodo={addTodo}
            changeValue={onChangeTodo}
            />
        </>
    );
};

