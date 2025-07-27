import { useState } from "react";
import { 
    Thumb,
    TaskList,
    TaskListItem, 
    TaskText, 
    TaskTextContainer, 
    TaskTextLabel, 
    EditSvg, 
    EditTextarea, 
    EditContainer, 
    EditBtn 
} from "./TaskCard.styled";

const TaskCard = ({dataTask, statusChange}) => {
    const [editValue, setEditValue] = useState('');
    const [editTaskId, setEditTaskId] = useState('');

    
    const handleChecked = (e) =>{
        const {checked, id} = e.target;
        console.log(id)
        if(!checked && !id){
            return;
        }
        statusChange({status: checked}, id);
    }

    const handleEditChange =({currentTarget: {dataset}}) => {
        
        dataset.el_id === editTaskId ? (setEditTaskId(''), setEditValue('')) : (setEditTaskId(dataset.el_id), setEditValue(dataset.text));
            
        }

        const handelEdit = (e) => {
            statusChange({task: editValue}, editTaskId);
            handleEditChange(e)
        }
    
    return(
        <Thumb>
            <TaskList>
                {dataTask.map((el) => {
                    const addTime = el.created_at;
                    const date = new Date(addTime);
                    const day = date.getDate();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    const fullDate = `${day}/${month}/${year}`

                    return (<TaskListItem key={el.id}>
                        
                            <p>{`${fullDate}`}</p>
                            <TaskTextContainer>
                                <EditSvg data-text={`${el.task}`} data-el_id={el.id} onClick={handleEditChange}>
                                    <use href="/img/edit.svg"></use>    
                                </EditSvg>                                                   
                                {editTaskId === String(el.id) ? <EditContainer>
                                    <EditTextarea name="edit" rows="1" value={editValue} onChange={(e) => setEditValue(e.target.value)}></EditTextarea>
                                    <EditBtn type="button" onClick={handelEdit}>Edit</EditBtn>
                                </EditContainer> :
                                <TaskText>{el.task}</TaskText>}                             
                                <TaskTextLabel>                                    
                                    <input type="checkbox" id={el.id} onChange={handleChecked} checked={el.status}/>
                                    <svg>
                                        <use href="/img/checkbox.svg"></use>
                                    </svg>
                                </TaskTextLabel>
                            </TaskTextContainer>
                        
                        </TaskListItem>)
                    })}
            </TaskList>
        </Thumb>
    )
}

export default TaskCard;