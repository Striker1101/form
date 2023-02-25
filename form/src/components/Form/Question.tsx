import React, { useState } from 'react'
import {Add} from "@material-ui/icons"
import {Menu}  from "@material-ui/icons"
import { Flex } from '../styles/Flex.styled'
interface Props{
  value: string
}

 
export default function Question(p:Props) {
  const [arrs, setArrs] = useState([1])
  const value = p.value
  function handleAdd(e:any){
    e.preventDefault()
    let arr = arrs[arrs.length-1] +1
    setArrs(arrs.concat(arr))
    console.log(arrs)

  }
  switch(value){
    case "paragraph":
      return(    
      <></>
      )
      break;
    case "multi-choice":
      return(
       <>
        <label htmlFor='choice'>
          {arrs.map((arr: any, i:number)=>{
            return(
             <Flex smDir='row' lgDir='row'>
              <Menu />
               <input type="text" name={`choice${i}`} id="choice" />
              <button onClick={handleAdd}>
              <Add />
              </button>
               </Flex>
            )
          })}
        </label>
       <label htmlFor="other-option">
        <input type="checkbox" name="other-option" id="other-option" />
        Enable "other" option
       </label>
       <label htmlFor="max">
       <h4>Max chioce allowed</h4>
       <input type="text" name="max" id="max" />
       </label>
       </>
      )
      break;
      case "Dropdown":
        return(
          <>
          <label htmlFor='choice'>
          {arrs.map((arr: any, i:number)=>{
            return(
             <Flex smDir='row' lgDir='row'>
              <Menu />
               <input type="text" name={`choice${i}`} id="choice" />
              <button onClick={handleAdd}>
              <Add />
              </button>
               </Flex>
            )
          })}
        </label>
       <label htmlFor="other-option">
        <input type="checkbox" name="other-option" id="other-option" />
        Enable "other" option
       </label>
          </>
        )
        break;
        case "Yes/NO":
          return(
            <label htmlFor="qualify">
              <input type="checkbox" name="qualify" id="qualify" />
              Disqualify candididate if the answer is no
            </label>
          )
          break;
      default:
        return (<div> this is default</div>)

  }
}
