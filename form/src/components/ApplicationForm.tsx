import React, { useState } from "react";
import Image from "./Form/Image";
import PersonalInfo from "./Form/PersonalInfo";
import Profile from "./Form/Profile";
import Submit from "../components/Form/Submit";
import { ApplicationFormStyled } from "./styles/ApplicationForm.styled";
import AdditionalQuestion from "./Form/AdditionalQuestion";
import { useDispatch } from "react-redux";
import { fetchLists } from "./Form/redux/reducer/lists";

export default function ApplicationForm() {
  const data = {
    version: 3,
    programID: 3123123,
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchLists(data));
  }, []);

  return (
    <ApplicationFormStyled>
      <form>
        <Image />
        <PersonalInfo />
        <Profile />
        <AdditionalQuestion />
        <Submit />
      </form>
    </ApplicationFormStyled>
  );
}
