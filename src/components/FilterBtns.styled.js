import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 20px;

    & button{
        background-color: transparent;
        outline: none;
        border: 1px solid ${({theme}) => theme.colors.primary};
        border-radius: 8px;
        color: ${({theme}) => theme.colors.primary};
        padding: 6px 12px;
        letter-spacing: 2px;   
    }
`
export {List}