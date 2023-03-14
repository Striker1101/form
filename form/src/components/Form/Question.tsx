import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { Flex } from "../styles/Flex.styled";
interface Props {
  value: string;
  handleForm: Function;
  choices: Array<string>;
  drops: Array<string>;
  setChoiceByIndex: Function;
  setChoices: React.Dispatch<React.SetStateAction<string[]>>;
  setDrops: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Question(p: Props) {
  const {
    value,
    handleForm,
    choices,
    drops,
    setChoiceByIndex,
    setChoices,
    setDrops,
  } = p;
  function handleAdd(e: any, pin: string) {
    e.preventDefault();
    if (pin === "choice") {
      setChoices(choices.concat(""));
    } else if (pin == "drop") {
      setDrops(drops.concat(""));
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
            {choices.map((choice: string, index: number) => {
              return (
                <Flex key={index} smDir="row" lgDir="row">
                  <MenuIcon />
                  <input
                    type="text"
                    name={`choice-${index}`}
                    value={choice}
                    onChange={(e) =>
                      setChoiceByIndex(e.target.value, index, "choices")
                    }
                  />
                  <button
                    onClick={(e) => {
                      handleAdd(e, "choice");
                    }}
                  >
                    <AddIcon />
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
            {drops.map((drop: any, index: number) => {
              return (
                <Flex key={index} smDir="row" lgDir="row">
                  <MenuIcon />
                  <input
                    type="text"
                    name={`drop-${index}`}
                    value={drop}
                    onChange={(e) =>
                      setChoiceByIndex(e.target.value, index, "drops")
                    }
                  />
                  <button
                    onClick={(e) => {
                      handleAdd(e, "drop");
                    }}
                  >
                    <AddIcon />
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
