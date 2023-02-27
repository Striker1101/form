import React, { useState } from 'react'
import {Add} from "@material-ui/icons"
import { ButtonNative } from '../styles/Button.styled'
import CustomQestion from './CustomQuestion'
interface Props {
    id: string
}
export default function Button(p: Props) {
    const id = p.id
    const [toggle, setToggle] = useState(false)
    
  return (
    <>
     <ButtonNative onClick={(e)=>{e.preventDefault(); setToggle(!toggle)}}> <Add /> Add a Question</ButtonNative>
    <div>
     
      {
       toggle ?
      <CustomQestion 
      setToggle={setToggle} 
      toggle={toggle} />
        : ""
      }
    </div>
    </>
   
    )
}
