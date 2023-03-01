import { Label } from '../styles/input.styled'
import { PersonalStyled, Header } from '../styles/input.styled'
import Button from './Button'
export default function Profile() {
  return (
    <PersonalStyled>
      <Header> Profile</Header>
      <Label htmlFor="education">
        <h4>Education</h4>
       <label htmlFor="educationInt">
       <input type="checkbox" name="educationInt" id="educationInt" />
       Internal
       </label>
       <label htmlFor="educationHide">
        <input type="checkbox" name="educationHide" id="educationHide" />
        Hide
      </label>
      </Label>
    
      <Label htmlFor="experience">
        <h4>Experience</h4>
       <label htmlFor="experienceInt">
       <input type="checkbox" name="experienceInt" id="experienceInt" />
       Internal
       </label>
       <label htmlFor="experienceHide">
        <input type="checkbox" name="experienceHide" id="experienceHide" />
        Hide
      </label>
      </Label>

      <Label htmlFor="resume">
        <h4>Resume</h4>
       <label htmlFor="resumeInt">
       <input type="checkbox" name="resumeInt" id="resumeInt" />
       Internal
       </label>
       <label htmlFor="resumeHide">
        <input type="checkbox" name="resumeHide" id="resumeHide" />
        Hide
      </label>
      </Label>

      <Button id="profile" />  
    </PersonalStyled>
  )
}
