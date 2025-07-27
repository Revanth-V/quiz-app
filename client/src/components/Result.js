import React, { useEffect, useState } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";

import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

/** import actions */
import { resetAllAction } from "../redux/question_reducer.js";
import { resetResultAction } from "../redux/result_reducer.js";
import { publishResult } from "../hooks/setResult.js";

export default function Result() {
  const dispatch = useDispatch();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const questionsAttempted = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  /** store user result */
  useEffect(() => {
    const saveResult = async () => {
      await publishResult({
        result,
        username: userId,
        points: earnPoints,
        achieved: flag ? "Passed" : "Failed",
      });
      // Trigger refresh of ResultTable after saving
      setRefreshTrigger((prev) => prev + 1);
    };

    saveResult();
  }, [result, userId, earnPoints, flag]);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points: </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions: </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Questions Attempted: </span>
          <span className="bold">{questionsAttempted || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earned Points: </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result: </span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        {/* result table */}
        <ResultTable refreshTrigger={refreshTrigger}></ResultTable>
      </div>
    </div>
  );
}
