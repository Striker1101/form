import React, { useState } from 'react'
import {Close} from "@material-ui/icons"
import Question from './Question'
import { Header, CustomStyled, Content } from '../styles/input.styled'
interface Props{
  toggle: boolean,
  setToggle:React.Dispatch<React.SetStateAction<boolean>>,
}

export default function CustomQestion(p:Props) {
  const {setToggle, toggle} = p
  const [select ,setSelect] = useState("paragraph")
  function handleSubmit(e: any){
    e.preventDefault();
  }

  return (
    <CustomStyled>
        <Content>
        <Header flex="space-evenly">
        Create Custom Questions
        <button title='Close' onClick={(e)=>{e.preventDefault(); setToggle(!toggle)}}>
          <Close/>
        </button>
      </Header>
      <form>
       <label htmlFor="type">
        Type
       <select onChange={(e)=>{setSelect(e.target.value)}} name="type" id="type" value={select}>
         <option value="paragraph" selected >paragraph</option>
         <option value="short_answer">short answer</option>
         <option value="Yes/NO">Yes/NO</option>
         <option value="Dropdown">Dropdown</option>
         <option value="multi-choice">Multi choice</option>
         <option value="date">Date</option>
         <option value="number" >Number</option>
         <option value="file-upload">File upload</option>
         <option value="video-question">Video Question</option>
       </select>
       </label>
       <label htmlFor="question">
        <h4>Question</h4>
        <input placeholder='Type here'  type="text" name="question" id="question" />    
        <div>
        <Question
     value={select}
     />
        </div>
       </label>  
     </form>
       <button onClick={handleSubmit} type="submit">Save</button>
        </Content>

       </CustomStyled>
  )
}
