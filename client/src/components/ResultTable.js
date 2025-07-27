import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper.js";

export default function ResultTable({ refreshTrigger }) {
  const [data, setData] = useState([]);

  const fetchResults = () => {
    console.log("ResultTable: Making API call to fetch results...");
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => {
        console.log("ResultTable: Received data from API:", res);
        setData(res);
      }
    );
  };

  useEffect(() => {
    fetchResults();
  }, []); // Initial load

  useEffect(() => {
    if (refreshTrigger) {
      fetchResults();
    }
  }, [refreshTrigger]); // Refresh when trigger changes

  console.log("ResultTable: Current data state:", data);

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achieved || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
