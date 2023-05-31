import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Creative Problem Solving",
  "Marketing Strategy",
  "Email Marketing Automation",
  "Analytics & Reporting",
  "KPI & ROI Analysis",
];

const ListTwo = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListTwo;
