import { useState } from "react";
import { BlurContainer } from "../utils/Styles.styled";
import { 
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
        <BlurContainer>
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
                                        <path d="m 4.2666667,5.73333 -0.9333334,0.93334 3,3 L 13,3 12.066667,2.06667 6.3333333,7.8 4.2666667,5.73333 Z m 7.4000003,5.93334 -9.3333337,0 0,-9.33334 L 9,2.33333 9,1 2.3333333,1 C 1.6,1 1,1.6 1,2.33333 l 0,9.33334 C 1,12.4 1.6,13 2.3333333,13 l 9.3333337,0 C 12.4,13 13,12.4 13,11.66667 l 0,-5.33334 -1.333333,0 0,5.33334 z"/>
                                    </svg>
                                </TaskTextLabel>
                            </TaskTextContainer>
                        
                        </TaskListItem>)
                    })}
            </TaskList>
        </BlurContainer>
    )
}

export default TaskCard;