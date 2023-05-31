//  import styles from  "./style.module.css";
import { InputForm } from "../InputForm/index";

export const AddTodo = (props) => {

    const { addInputValue, addTodo, onChangeTodo } =props
    return (
        <>
            <InputForm
            placeholder={"New Todo"}
            inputValue={addInputValue}
            // エンター押下処理
            KeyDown={addTodo}

            // handleChangeValue={onChangeTodo}
            />
        </>
    )
};

