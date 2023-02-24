import React from 'react'
import {Add} from "@material-ui/icons"
import { ButtonNative } from '../styles/Button.styled'
interface Props {
    id: string
}
export default function Button(p: Props) {
    const id = p.id
  return (
    <ButtonNative type="submit"> <Add /> Add a Question</ButtonNative>
  )
}
