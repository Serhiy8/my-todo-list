import styled from "styled-components";

const Thumb = styled.div`
    padding: 16px 12px;
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    & li button {
        position: relative;
        display: block;
        border: 1px solid ${({theme}) => theme.colors.primary};
        background: transparent;
        padding: 6px 30px 6px 12px;
        border-radius: 8px;
        color: ${({theme}) => theme.colors.primary};
    }
    & li button svg {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 4px;
        right: 5px;
        stroke: ${({theme}) => theme.colors.primary};
    }
`

const FirstEl = styled.li`
    flex-grow: 2;
    text-align: center;
    font-size: 20px;
    letter-spacing: 5px;
    @media (min-width: 375px){
        letter-spacing: 10px;
    }
`

export {Thumb, List, FirstEl}