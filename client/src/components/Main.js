import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";
import { useDispatch } from "react-redux";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one option.
        </li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        {/* You can access the value of this input box using the variable inputRef */}
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        ></input>
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
