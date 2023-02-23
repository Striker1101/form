import React, { useState, ReactNode, useRef } from "react";
import { FormStyled, Tags, Toggle } from "./styles/Form.style";
import ApplicationForm from "./ApplicationForm";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import WorkFlow from "./WorkFlow";
import Preview from "./Preview";
export default function NavForm() {
  return (
    <FormStyled>
      <Tags>
        <Link to={"/form"}>
        <button type="submit">Program Details</button>
        </Link>

       <Link to={"/form/application-form"}>
       <button type="submit">
          Application Form
        </button>
       </Link>

       <Link to={"/form/workflow"}>
       <button type="submit">WorkFlow</button>
       </Link>
        
       <Link to={"/form/preview"}>
       <button type="submit">Preview</button>
       </Link>
       
      </Tags>
      <Toggle>
      <Routes>
        <Route index element={<Details/>} />
        <Route path={"/application-form"} element={<ApplicationForm />} />
        <Route path={"/workflow"} element={<WorkFlow />} />
        <Route path={"/preview"} element={<Preview />} />
      </Routes>
      </Toggle>
    </FormStyled>
  );
}
