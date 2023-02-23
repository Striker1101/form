import styled from "styled-components";

export const AppStyled = styled.div`
display: flex;


@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    height: fit-content;
    width: 100vw;
  }
`