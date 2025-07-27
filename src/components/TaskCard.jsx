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
                                    <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
   
                                </EditSvg>                                                   
                                {editTaskId === String(el.id) ? <EditContainer>
                                    <EditTextarea name="edit" rows="1" value={editValue} onChange={(e) => setEditValue(e.target.value)}></EditTextarea>
                                    <EditBtn type="button" onClick={handelEdit}>Edit</EditBtn>
                                </EditContainer> :
                                <TaskText>{el.task}</TaskText>}                             
                                <TaskTextLabel>                                    
                                    <input type="checkbox" id={el.id} onChange={handleChecked} checked={el.status}/>
                                    <svg viewBox="0 0 14 14">
                                        <path d="m 4.2666667,5.73333 -0.9333334,0.93334 3,3 L 13,3 12.066667,2.06667 6.3333333,7.8 4.2666667,5.73333 Z m 7.4000003,5.93334 -9.3333337,0 0,-9.33334 L 9,2.33333 9,1 2.3333333,1 C 1.6,1 1,1.6 1,2.33333 l 0,9.33334 C 1,12.4 1.6,13 2.3333333,13 l 9.3333337,0 C 12.4,13 13,12.4 13,11.66667 l 0,-5.33334 -1.333333,0 0,5.33334 z"/>
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