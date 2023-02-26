import React, { ReactNode, useState } from "react";
import { Add } from "@material-ui/icons";
import { Menu } from "@material-ui/icons";
import { Flex } from "../styles/Flex.styled";
interface Props {
  value: string;
  handleForm: Function;
  dropNum: React.Dispatch<React.SetStateAction<number>>;
  multiNum: React.Dispatch<React.SetStateAction<number>>;
}

export default function Question(p: Props) {
  const [dropArr, setDropArr] = useState([1]);
  const [choiceArr, setChoiceArr] = useState([1]);
  const { value, handleForm, dropNum, multiNum } = p;
  function handleAdd(e: any, pin: string) {
    e.preventDefault();
    if (pin === "choice") {
      let arr = choiceArr[choiceArr.length - 1] + 1;
      setChoiceArr(choiceArr.concat(arr));
      multiNum(choiceArr.length);
    } else if (pin == "drop") {
      let arr = dropArr[dropArr.length - 1] + 1;
      setDropArr(dropArr.concat(arr));
      dropNum(dropArr.length);
    }
  }
  switch (value) {
    case "paragraph":
      return (
        <>
          <input
            onChange={(e) => {
              handleForm(e, "paragraph");
            }}
            placeholder="Type here"
            type="text"
            name="question"
            id="question"
          />
        </>
      );
      break;
    case "multi-choice":
      return (
        <>
          <input
            onChange={(e) => {
              handleForm(e, "multi-choice");
            }}
            placeholder="Type here"
            type="text"
            name="question"
            id="question"
          />
          <label htmlFor="choice">
            {choiceArr.map((arr: any, i: number) => {
              return (
                <Flex key={i} smDir="row" lgDir="row">
                  <Menu />
                  <input type="text" name="choice" id={`choice${i}`} />
                  <button
                    onClick={(e) => {
                      handleAdd(e, "choice");
                    }}
                  >
                    <Add />
                  </button>
                </Flex>
              );
            })}
          </label>
          <label htmlFor="other-option">
            <input
              onChange={(e) => {
                handleForm(e, "multi-choice");
              }}
              type="checkbox"
              name="option"
              id="option"
            />
            Enable "other" option
          </label>
          <label htmlFor="max">
            <h4>Max chioce allowed</h4>
            <input
              onChange={(e) => {
                handleForm(e, "multi-choice");
              }}
              type="number"
              name="max"
              id="max"
            />
          </label>
        </>
      );
      break;
    case "Dropdown":
      return (
        <>
          <input
            onChange={(e) => {
              handleForm(e, "Dropdown");
            }}
            placeholder="Type here"
            type="text"
            name="question"
          />
          <label htmlFor="choice">
            {dropArr.map((arr: any, i: number) => {
              return (
                <Flex key={i} smDir="row" lgDir="row">
                  <Menu />
                  <input type="text" name="choice" id={`drop${i}`} />
                  <button
                    onClick={(e) => {
                      handleAdd(e, "drop");
                    }}
                  >
                    <Add />
                  </button>
                </Flex>
              );
            })}
          </label>
          <label htmlFor="other-option">
            <input
              onChange={(e) => {
                handleForm(e, "Dropdown");
              }}
              type="checkbox"
              name="option"
              id="option"
            />
            Enable "other" option
          </label>
        </>
      );
      break;
    case "Yes/No":
      return (
        <>
          <input
            onChange={(e) => {
              handleForm(e, "Yes/No");
            }}
            placeholder="Type here"
            type="text"
            name="question"
            id="question"
          />{" "}
          <br />
          <label htmlFor="qualify">
            <input
              onChange={(e) => {
                handleForm(e, "Yes/No");
              }}
              type="checkbox"
              name="qualify"
              id="qualify"
            />
            Disqualify candididate if the answer is no
          </label>
        </>
      );
      break;
    default:
      return <div> this is default</div>;
  }
}
