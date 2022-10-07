import styled from '@emotion/styled'

export const FilterBox = styled.div`
    position:absolute;
    top:58px;
    right: 0px;
    outline: 2px solid green;
    height:330px;
    width: 580px;
    background-color: gold;
    display:flex;
    flex-direction: column;
    border-radius: 4px;
`
export const FormLabel = styled.label `
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 700px;
    color: red;
`
export const FormInput = styled.input`
    background-color: blue;
    max-width: 80%;
    margin-left: 40px;
    margin-top: 50px;
    height: 100px;
    border-radius: 10px;
    font-size: 40px;
    font-style: italic;
    color:white;
    padding-left: 30px;
     &:hover,
    &focus {
        scale:1.1;
        margin-top: 50px;
    }
`