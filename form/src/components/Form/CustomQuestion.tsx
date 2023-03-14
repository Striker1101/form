import React, { ReactNode, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Question from "./Question";
import { useDispatch } from "react-redux";
import { updateCustomQuestion } from "./redux/action";
import { Header, CustomStyled, Content } from "../styles/input.styled";
interface Props {
  toggle: boolean;

  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Paragraph {
  question: string;
  type: string;
}

interface MultiChoice {
  question: string;
  choice: string[];
  option: boolean;
  max: number;
  type: string;
}

interface DropDown {
  question: string;
  choice: string[];
  option: boolean;
  type: string;
}
interface YesNo {
  question: string;
  qualify: boolean;
  type: string;
}

export default function CustomQestion(p: Props) {
  //data from custom question
  const paragraph: Paragraph = {
    type: "paragraph",
    question: "",
  };

  const multiChoice: MultiChoice = {
    question: "",
    choice: [],
    option: false,
    max: 0,
    type: "multiChoice",
  };
  const dropDown: DropDown = {
    question: "",
    choice: [],
    option: false,
    type: "dropDown",
  };

  const YesNo: YesNo = {
    question: "",
    qualify: false,
    type: "Yes/No",
  };

  const { setToggle, toggle } = p;
  const [select, setSelect] = useState("paragraph");
  const [_paragraph, setParagraph] = useState(paragraph);
  let [_dropDown, setDropDown] = useState(dropDown);
  let [_multiChoice, setMultiChoice] = useState(multiChoice);
  const [_YesNo, setYesNo] = useState(YesNo);
  const form = useRef<HTMLFormElement>(null);
  const [choices, setChoices] = useState<string[]>([""]);
  const [drops, setDrops] = useState<string[]>([""]);

  //handling choices
  function setChoiceByIndex(value: any, index: number, pin: string) {
    if (pin === "choices") {
      setChoices((prevChoices) => {
        return prevChoices.map((choice, i) => {
          if (index === i) {
            return value;
          }
          return choice;
        });
      });
    } else {
      setDrops((prevDrop) => {
        return prevDrop.map((drop, i) => {
          if (index === i) {
            return value;
          }
          return drop;
        });
      });
    }
  }

  //list data from store
  const dispatch = useDispatch();

  //on click of submit
  function handleSubmit(e: any) {
    e.preventDefault();
    switch (select) {
      case "paragraph":
        if (_paragraph.question !== "") {
          dispatch(updateCustomQuestion(_paragraph));
        }
        form.current?.reset();
        break;
      case "Dropdown":
        if (_dropDown.question !== "") {
          const dual = _dropDown;
          dual.choice.push(...drops);
          setDropDown(dual);
          dispatch(updateCustomQuestion(_dropDown));
        }
        form.current?.reset();
        break;
      case "multi-choice":
        if (_multiChoice.question !== "") {
          const dual = _multiChoice;
          dual.choice.push(...choices);
          setMultiChoice(dual);
          dispatch(updateCustomQuestion(_multiChoice));
        }
        form.current?.reset();
        break;
      case "Yes/No":
        if (_YesNo.question !== "") {
          dispatch(updateCustomQuestion(_YesNo));
        }
        form.current?.reset();
        break;
      default:
        throw new Error("now action selected");
    }
  }

  function handleForm(event: any, point: string) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (point === "paragraph") {
      setParagraph((prev) => ({ ...prev, [name]: value }));
    } else if (point === "Dropdown") {
      setDropDown((prev) => ({ ...prev, [name]: value }));
    } else if (point === "multi-choice") {
      setMultiChoice((prev) => ({ ...prev, [name]: value }));
    } else if (point === "Yes/No") {
      setYesNo((prev) => ({ ...prev, [name]: value }));
    }
  }

  return (
    <CustomStyled>
      <Content>
        <Header flex="space-evenly">
          Create Custom Questions
          <button
            title="Close"
            onClick={(e) => {
              e.preventDefault();
              setToggle(!toggle);
              //update last submit
              dispatch(updateCustomQuestion(""));
            }}
          >
            <CloseIcon />
          </button>
        </Header>
        <form ref={form}>
          <label htmlFor="type">
            Type
            <select
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              name="type"
              id="type"
              value={select}
            >
              <option value="paragraph" selected>
                paragraph
              </option>
              <option value="short_answer">short answer</option>
              <option value="Yes/No">Yes/No</option>
              <option value="Dropdown">Dropdown</option>
              <option value="multi-choice">Multi choice</option>
              <option value="date">Date</option>
              <option value="number">Number</option>
              <option value="file-upload">File upload</option>
              <option value="video-question">Video Question</option>
            </select>
          </label>
          <label htmlFor="question">
            <h4>Question</h4>
            <div>
              <Question
                handleForm={handleForm}
                value={select}
                choices={choices}
                setChoices={setChoices}
                drops={drops}
                setDrops={setDrops}
                setChoiceByIndex={setChoiceByIndex}
              />
            </div>
          </label>
        </form>
        <button onClick={handleSubmit} type="submit">
          Save
        </button>
      </Content>
    </CustomStyled>
  );
}
