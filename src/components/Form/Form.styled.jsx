import styled from '@emotion/styled'

export const FormMarcup = styled.form`
    outline: 2px solid red;
    position: relative;
    width: 528px;
    height: 250px;
    padding: 40px;
    background-color: #53c70c;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    display: flex;
    flex-direction:column;
`
export const FormLabel = styled.label`
    color: white;
`
export const FirstInput = styled.input`
    background-color: #ffbb32;
    height: 70px;
    border-radius: 10px;
    font-size: 40px;
    font-style: italic;
    color:white;
    padding-left: 30px;
    border-color: white;
    &:hover,
    &focus {
        scale:1.1;
        margin-top: 4px;
    }
`
export const SecondInput = styled.input`
    background-color: #296cf1;
    height: 70px;
    border-radius: 10px;
    border-color: grey;
    padding-left: 30px;
    font-size: 40px;
    font-style: italic;
    color:white;
    &:hover,
    &focus {
        scale:1.1;
        margin-top: 4px;
    }
`
export const FormButton = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background-color: gold;
    color:white;
    font-weight: 700;
    font-size: 20px;
    font-style: italic;
    border-radius: 6px;
    border: none;

    &:hover,
    &:focus {
        background-color: white;
        color: gold;
        scale:1.1;
    }
`