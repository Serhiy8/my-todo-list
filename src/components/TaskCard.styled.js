import styled from "styled-components";

const TaskList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
` 
const TaskListItem = styled.li`
    position: relative;
    background-color: ${({theme}) => theme.colors.taslItem};
    border-radius: 16px;
    padding: 8px 16px;
`

const TaskTextContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    margin-top: 8px;
`
const TaskText = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const TaskTextLabel = styled.label`
    & input {
        display: none;
        &:checked ~ svg {
            fill: ${({theme}) => theme.colors.checkedGreen};
        }
    }

    & svg {
        width: 20px;
        height: 20px;
        fill: ${({theme}) => theme.colors.primary};
    }    
`

const EditSvg = styled.svg`
    position: absolute;
    top: 3px;
    width: 30px;
    height: 30px;
    transition: stroke 0.3s;
    stroke: ${({theme}) => theme.colors.primary};
    &.active,
    &:hover,
    &:focus {
        stroke: ${({theme}) => theme.colors.checkedGreen};
    }
`

const EditContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
`

const EditTextarea = styled.textarea`
    display: block;
    width: 100%;
    outline: none;
    border: none;
    background: none;
    resize: none;    
    white-space: nowrap;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.colors.backgroundTextarea};    
    color: ${({theme}) => theme.colors.primary};
    border-radius: 6px;
`

const EditBtn = styled.button`
    border: 1px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.textDark};
    padding: 6px 18px;
    border-radius: 8px;
`

export {TaskList, TaskListItem, TaskText, TaskTextContainer, TaskTextLabel, EditSvg, EditTextarea, EditContainer, EditBtn}