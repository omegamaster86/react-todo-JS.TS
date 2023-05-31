//  import styles from  "./style.module.css";
import { InputForm } from "../InputForm/index";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../data";


export const AddTodo = (props) => {

    const { addInputValue } =props
    return (
        <>
            <InputForm
            placeholder={"New Todo"}
            inputValue={addInputValue}
            // addInputValue={addInputValue}
            d
            />
        </>
    )
};

