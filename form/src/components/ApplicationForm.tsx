import React,{useState} from 'react'
import Image from './Form/Image'
import PersonalInfo from './Form/PersonalInfo'
import Profile from './Form/Profile'
import Submit from "../components/Form/Submit"
import AdditionalQuestion from './Form/AdditionalQuestion'
export default function ApplicationForm() {
interface listType{
  image: Array<File>
}

  const list:listType ={
    image:[]
  }
  
  const [Form, setForm] = useState(list)
  console.log(Form)
  return (
    <div>
      <form action="">
       <Image setForm={setForm} />
       <PersonalInfo />
       <Profile />
       <AdditionalQuestion />
       <Submit />
      </form>
    </div>
  )
}
