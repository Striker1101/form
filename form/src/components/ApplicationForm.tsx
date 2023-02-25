import React,{useState} from 'react'
import Image from './Form/Image'
import PersonalInfo from './Form/PersonalInfo'
import Profile from './Form/Profile'
import Submit from "../components/Form/Submit"
import { ApplicationFormStyled } from './styles/ApplicationForm.styled'
import AdditionalQuestion from './Form/AdditionalQuestion'
import { useDispatch, useSelector, } from "react-redux";
import { fetchLists } from './Form/redux/reducer/lists'
import axios from 'axios'
export default function ApplicationForm() {
 const data = {
  version: 3,
  programID: 3123123
 }
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchLists(data));
  }, []);
  const collector = useSelector((state:any) => state.lists);

  function handleSubmit(){
    if (!collector.loading){
    console.log("done")
    const data = new FormData();
    data.append("file", collector.lists.image);
    data.append("upload_preset", "blog_post");
    }

    axios
          .post(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
            data
          )
          .then((res) => {
            //upload res.data.secure_url, res.data.public_id
            axios
            .post( `${ process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_DEV_MODE
            : process.env.REACT_APP_PRO_MODE}/api/${1.0}/programs/${2342234123}/application-form`,
            {
              //payload
            },
            {
              headers: {
              "Content-Type": "application/json",
              // authentication to api 
              Authorization: `Bearer ${"programProviderid"}`,
            },})
          });
  }

  return (
    <ApplicationFormStyled>

      <form onSubmit={handleSubmit}>
       <Image  />
       <PersonalInfo />
       <Profile />
       <AdditionalQuestion />
       <Submit />
      </form>
    </ApplicationFormStyled>
  )
}

