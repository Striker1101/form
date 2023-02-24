import styled from "styled-components";

interface Props{
  bg:string
  color:string
}

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: fit-content;
  padding: 5px 5px;
  background-color: ${(p:Props) => p.bg || "#fff"};
  color: ${(prop: Props) => prop.color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const ButtonNative = styled.button`
    float: left;
    display:flex;
    align-items: center;
    gap: 3px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    margin:40px 0;
`
