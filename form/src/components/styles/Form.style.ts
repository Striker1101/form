import styled from "styled-components";

export const FormStyled= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin:5px;
`

export const Tags  = styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
background-color:${({theme})=> theme.colors.white};
width: 95vw;
margin: 5px;
padding: 5px;
height: 50px;


button{
    background-color: transparent;

    border-right-color:${({theme})=> theme.colors.body} ;
    border-top: transparent;
    border-bottom: transparent;
    border-left: transparent;
    cursor: pointer;
}
`

export const Toggle = styled.div`
margin: 0 10px;
`