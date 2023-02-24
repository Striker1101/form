import styled from "styled-components";

export const PersonalStyled = styled.div`
width: 100%;
display:flex;
margin-top: 20px;
flex-direction: column;
border-radius: 15px 15px 0 0 ;
box-shadow: #000 2px 1px 4px 1px ;


input{
    border: transparent;
    width: 70%;
    background-color: transparent;
    height: 40px;
}
input:focus{
    border: transparent;
    background-color: transparent;
}
input:active{
    border: transparent;
    background-color: transparent;
}
h4{
    margin: 0px;
    padding:0px;
    color: #000;
}

hr{
    width: 100%;
}

span{
    font-weight: 100;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    hr{
        display: none;
    }
    input{
    border: 2px solid;
    border-radius: 10px;
}
  }
`

export const Label = styled.label`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 10px 5px;
    padding:0 10px;
    label{
        display: flex;
        margin: 0;
        align-items: center;
    }
`

export const Header = styled.h2`
    background-color: lightblue;
    padding: 15px;
    border-radius: 15px 15px 0 0 ;
    height:fit-content;
    width: 100%;
    position: relative;
    bottom: 20px;
`

export const Contain = styled.div`
display: flex;
flex-direction: column;
input{
    width: 95%;
    margin: 0 10px;
}

`

export const SubmitStyled = styled.div`
float: right;
background-color: #21B592;
margin: 20px 0;
input{
    height: 30px;
    background-color: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
}
`