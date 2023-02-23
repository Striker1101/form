import styled from "styled-components";

export const NavStyled = styled.div`
display: flex;
gap: 10px;
width: fit-content;
height:100vh;
background-color: white;
padding: 0 5px;
flex-direction: column;


@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    height: fit-content;
    width: 100vw;
  }
`