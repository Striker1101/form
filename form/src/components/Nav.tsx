import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Menu } from "@material-ui/icons";
import {Home} from "@material-ui/icons"
import { Input } from "@material-ui/icons"
import React,{ReactElement} from 'react'
import { NavStyled } from "./styles/Nav.style";
export default function Nav():ReactElement {
  return (
   <NavStyled>
   <span>
    <Menu />
   </span>
   <span>
    <Home />
   </span>
   <span>
    <Input />
   </span>
   </NavStyled>
  )
}
