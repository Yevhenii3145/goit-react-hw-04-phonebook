import styled from '@emotion/styled'
export const ContactElement = styled.li`
    font-size:35px;
    font-weight: 700;
    color: greenyellow;
    /* margin-left: 40px; */
    display: flex; 
    align-items: center;
    margin-top: 20px;
    height: 60px;
    margin-right: 35px;
`
export const DeletButton = styled.button`
    margin-left: 20px;
    background-color: black;
    color: white;
    height: 40px;
    width:80px;
    font-weight: 700;
    font-size: 20px;
    font-style: italic;
    border-radius: 6px;
    border: none;
    &:hover,
    &:focus {
        background-color: white;
        color: greenyellow;
        scale:1.2;
    }
`