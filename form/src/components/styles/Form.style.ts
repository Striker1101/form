import styled from "styled-components";

export const FormStyled= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Tags  = styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
margin: 2px;
background-color:${({theme})=> theme.colors.white};
width: 100vw;
margin: 5px;
padding: 5px;


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