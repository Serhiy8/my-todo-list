import styled from "styled-components";

const SectionSt = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('/img/mountains.jpg');
    background-size: cover;
    background-repeat: no-repeat;

& div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 20px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    padding: 26px 16px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    box-shadow: 0 0 30px;
}
& div form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

& div form label {
    position: relative;
    display: flex;
    align-items: center;    
}

& div form label input {
    background-color: transparent;
    padding: 6px 12px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
    
    &:focus ~ p {
        top: -15px;
        font-size: 10px;
    }
}

& div form button {
    background-color: ${({theme}) => theme.colors.primary};
    padding: 6px 0;
    border: none;
    border-radius: 4px;
    font-family: 'Montserrat';
}
`

const TextEmail = styled.p`
    position: absolute;
    top: ${({$value}) => ($value ? '-15px' : '0')};
    left: 0;
    font-size: ${({$value}) => ($value? '10px' : '12px')};
    transition: top 200ms;
`
const TextPassword = styled.p`
    position: absolute;
    top: ${({$value}) => ($value ? '-15px' : '0')};
    left: 0;
    font-size: ${({$value}) => ($value ? '10px' : '12px')};
    transition: top 200ms;
`

const Text = styled.p`
    font-size: 10px;
    & a {
        color: ${({theme}) => theme.colors.primary};
    }
`

export {SectionSt,TextEmail, TextPassword , Text}