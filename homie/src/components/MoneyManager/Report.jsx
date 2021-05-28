import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Money.css";
import "./InnerStyles.css";
import db from "../../firebase";

function Report({ income, expense, saving }) {

  const data = {
    labels: ["inflows", "outflows", "savings"],
    datasets: [
      {
        label: "My First Dataset",
        data: [income, expense, saving],
        backgroundColor: [
          "#182C61",
          "#4bcffa",
          "#0be881",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="form_container">
      <h3>Report</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default Report;
