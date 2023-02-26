import styled from "styled-components";

interface Props {
  flex?: string;
}

export const PersonalStyled = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  box-shadow: #000 2px 1px 4px 1px;

  input {
    border: transparent;
    width: 70%;
    background-color: transparent;
    height: 40px;
  }
  input:focus {
    border: transparent;
    background-color: transparent;
  }
  input:active {
    border: transparent;
    background-color: transparent;
  }
  h4 {
    margin: 0px;
    padding: 0px;
    color: #000;
  }

  hr {
    width: 100%;
  }

  span {
    font-weight: 100;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    hr {
      display: none;
    }
    input {
      border: 2px solid;
      border-radius: 10px;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px 5px;
  padding: 0 10px;
  label {
    display: flex;
    margin: 0;
    align-items: center;
  }
`;

export const Header = styled.h2`
  background-color: lightblue;
  padding: 15px;
  border-radius: 15px 15px 0 0;
  height: fit-content;
  width: 100%;
  position: relative;
  bottom: 20px;
  display: flex;
  justify-content: ${(p: Props) => p.flex || "flex-start"};
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 95%;
    margin: 0 10px;
  }
`;

export const SubmitStyled = styled.div`
  float: right;
  background-color: #21b592;
  margin: 20px 0;
  input {
    height: 30px;
    background-color: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
  }
`;
export const CustomStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0, 3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 3;
  width: 70%;

  select {
    width: 100%;
    height: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    width: 100%;
    border-radius: 0;
    height: 30px;
  }
  input[type="checkbox"] {
    width: min-content;
  }
  label {
    margin: 5px 5px;
    padding: 5px;
  }
  button {
    background-color: lightblue;
    transition: transform ease-in-out;
    border: transparent;
    padding: 10px;
    border-radius: 20px;
  }
  button:hover {
    transform: scale(0.9);
  }
`;

export const AddQuesStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  hr {
    width: 80vw;
    height: 5px;
  }
  input[type="checkbox"] {
    width: min-content;
  }
  label {
    display: flex;
    align-items: center;
    
  }
   h5,p{
    margin: 0;
    padding: 0;
   }
`;
