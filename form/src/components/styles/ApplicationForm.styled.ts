import styled from "styled-components";
import ApplicationForm from "../ApplicationForm";

export const ApplicationFormStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5px 0;
width: 95vw;
background-color:${({theme})=> theme.colors.white};
form{
 display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
` 