//  import styles from  "./style.module.css";
import { InputForm } from "../InputForm/index";

export const AddTodo = (props) => {

    const { addInputValue } =props
    return (
        <>
            <InputForm
            placeholder={"New Todo"}
            inputValue={addInputValue}
            // addInputValue={addInputValue}
            
            />
        </>
    )
};

