import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex } from "../styles/Flex.styled";
import { PersonalStyled, Header, AddQuesStyle } from "../styles/input.styled";
import Button from "./Button";
export default function AdditionalQuestion() {
  const collector = useSelector((state: any) => state.lists);
  return (
    <PersonalStyled>
      <Header>Additional questions</Header>
      {!collector.loading && collector.start ? (
        <>
          {collector.lists.customQuestion.map((list: any, i: number) => {
            console.log(list);
            switch (list.type) {
              case "paragraph":
                return (
                  <AddQuesStyle>
                    <div>
                      {list.type}
                      <h4>{list.question}</h4>
                    </div>
                    <hr />
                  </AddQuesStyle>
                );
              case "dropDown":
                return (
                  <AddQuesStyle>
                    <div>
                      {list.type}
                      <h4>{list.question}</h4>
                    </div>
                    <label htmlFor="option">
                      option:
                      <input
                        checked={list.option}
                        type="checkbox"
                        name="option"
                        id="option"
                      />
                    </label>
                    <div>
                      {list.choice.map((choice: string, i: number) => {
                        return <p key={i}>{choice}</p>;
                      })}
                    </div>
                    <hr />
                  </AddQuesStyle>
                );
              case "multiChoice":
                return (
                  <AddQuesStyle>
                    <div>
                      {list.type}
                      <h4>{list.question}</h4>
                    </div>
                    <label htmlFor="option">
                      option:
                      <input
                        checked={list.option}
                        type="checkbox"
                        name="option"
                        id="option"
                      />
                    </label>
                    <div>
                      {list.choice.map((choice: string, i: number) => {
                        return <p key={i}>{choice}</p>;
                      })}
                    </div>
                    <h6>max: {list.max}</h6>
                    <hr />
                  </AddQuesStyle>
                );
              case "Yes/No":
                return (
                  <AddQuesStyle>
                    <div>
                      {list.type}
                      <h4>{list.question}</h4>
                    </div>
                    <label htmlFor="qualify">
                      Disqualify if answer is No:
                      <input
                        checked={list.qualify}
                        type="checkbox"
                        name="qualify"
                        id="qualify"
                      />
                    </label>
                    <hr />
                  </AddQuesStyle>
                );
            }
          })}
        </>
      ) : (
        ""
      )}
      <Button id="addionalQuestion" />
    </PersonalStyled>
  );
}
