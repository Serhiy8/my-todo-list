import SessionContext from "../supabaseServices/sessionContext";
import { Label } from "./FormAddTask.styled";
import { BlurContainer } from "../utils/Styles.styled";
import { useState } from "react";

const FormAddTask = ({onSubmit}) => {
    
    const [taskText, setTaskText] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(taskText.trim() === ''){
            console.log("Fields can't be empty.");
            return;
        }
        onSubmit(taskText);
        setTaskText('');
    }

    return(
        <BlurContainer>
            <form onSubmit={handleSubmit}>
                <Label>
                    <div>
                        <p>New Task...</p>                    
                        <textarea id="task" name="task" rows='5' value={taskText} onChange={(e) => setTaskText(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Add Task</button>
                </Label>
            </form>
        </BlurContainer>
    )
}

export default FormAddTask;