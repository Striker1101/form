import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { ButtonNative } from "../styles/Button.styled";
import CustomQestion from "./CustomQuestion";
interface Props {
  id: string;
}
export default function Button(p: Props) {
  const id = p.id;
  console.log(id);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <ButtonNative
        onClick={(e: any) => {
          e.preventDefault();
          setToggle(!toggle);
        }}
      >
        {" "}
        <AddIcon /> Add a Question
      </ButtonNative>
      <div>
        {toggle ? <CustomQestion setToggle={setToggle} toggle={toggle} /> : ""}
      </div>
    </>
  );
}
