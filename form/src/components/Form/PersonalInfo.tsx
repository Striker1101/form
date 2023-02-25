import { margin } from '@mui/system'
import React from 'react'
import {Add} from "@material-ui/icons"
import { Flex } from '../styles/Flex.styled'
import Button from './Button'
import { PersonalStyled, Label, Header, Contain } from '../styles/input.styled'
export default function PersonalInfo() {
  return (
    <PersonalStyled>
      <Header>Personal information</Header>
     <Flex smDir='row' lgDir='column'>
     <Label htmlFor="firstName">
        <h4>First Name</h4>
        <input type="text" name="firstName" id="firstName" />
      </Label>
      <hr />
      
      <Label htmlFor="lastName">
        <h4>Last Name</h4>
        <input type="text" name="lastName" id="lastName" />
      </Label>
      <hr />
     </Flex>

      <Label htmlFor="email">
        <h4>Email</h4>
        <input type="email" name="email" id="email" />
      </Label>
      <hr />

      <Contain>
      <Label htmlFor="phone">
        <h4>Phone<span>(without dial code)</span> </h4>
       <label htmlFor="phoneInt">
       <input type="checkbox" name="PhoneInt" id="phoneInt" />
       Internal
       </label>
       <label htmlFor="phoneHide">
        <input type="checkbox" name="phoneHide" id="phoneHide" />
        Hide
      </label>
      </Label>
      <input type="number" name="phoneinput" id="phoneinput" />
      </Contain>
      <hr />

      <Contain>
      <Label htmlFor="nationality">
        <h4>Nationality </h4>
       <label htmlFor="nationalityInt">
       <input type="checkbox" name="nationalityInt" id="nationalityInt" />
       Internal
       </label>
       <label htmlFor="nationalityHide">
        <input type="checkbox" name="nationalityHide" id="nationalityHide" />
        Hide
      </label>
      </Label>
      <input type="text" name="nationalityinput" id="nationalityinput" />
      </Contain>
      <hr />


      <Contain>
      <Label htmlFor="residence">
        <h4>Current Residence </h4>
       <label htmlFor="residence">
       <input type="checkbox" name="residenceInt" id="residenceInt" />
       Internal
       </label>
       <label htmlFor="residenceHide">
        <input type="checkbox" name="residenceHide" id="residenceHide" />
        Hide
      </label>
      </Label>
      <input type="text" name="residenceinput" id="residenceinput" />
      </Contain>
      <hr />

      <Contain>
      <Label htmlFor="id">
        <h4>ID Number </h4>
       <label htmlFor="idInt">
       <input type="checkbox" name="idInt" id="idInt" />
       Internal
       </label>
       <label htmlFor="idHide">
        <input type="checkbox" name="idHide" id="idHide" />
        Hide
      </label>
      </Label>
      <input type="text" name="idinput" id="idinput" />
      </Contain>
      <hr />

      <Contain>
      <Label htmlFor="DOB">
        <h4>Date of Birth</h4>
       <label htmlFor="DOBInt">
       <input type="checkbox" name="DOBInt" id="DOBInt" />
       Internal
       </label>
       <label htmlFor="DOBHide">
        <input type="checkbox" name="DOBHide" id="DOBHide" />
        Hide
      </label>
      </Label>
      <input type="text" name="DOBinput" id="DOBinput" />
      </Contain>
      <hr />

      <Contain>
      <Label htmlFor="gender">
        <h4>Gender</h4>
       <label htmlFor="genderInt">
       <input type="checkbox" name="genderInt" id="genderInt" />
       Internal
       </label>
       <label htmlFor="DOBHide">
        <input type="checkbox" name="genderHide" id="genderHide" />
        Hide
      </label>
      </Label> 
      <input type="text" name="genderinput" id="genderinput" />
      </Contain>
     
      <Button id="personal"></Button>
    </PersonalStyled>
  )
}
