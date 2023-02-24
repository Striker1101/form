import styled from "styled-components";

export const ImageStyled = styled.div`
 text-align: center;
  display:flex ;
 margin-top: 10px;
  align-items:center;
  justify-content:center;
  width:fit-content;
  border-radius:20px 20px 0px 0px;
  flex-direction: column;
  background-color:${({theme})=> theme.colors.white};
  overflow: hidden;
label{
  background-color: lightblue;
  width: 100%;
  padding: 3px;
  border-radius:20px 20px 0px 0px;
}

`

export const Dragbox = styled.span`
 width: 300px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  font-weight: bold;
  line-height: 95px;
  color: #999;
  border: 2px dashed #ccc;
  display: inline-block;
  transition: transform 0.3s;
 
  input[type="file"] {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
`

export const Preview = styled.div`
div{
  display:flex;
  justify-content: center;
  color: red;
  padding: 5px;
  cursor:pointer;
  background-color:${({theme})=> theme.colors.white};
}
  img {
    max-width: 100%;
  }
  border-radius:20px;
  display:none;
  width:400px;
  height:auto;
  flex-direction: column-reverse;
`