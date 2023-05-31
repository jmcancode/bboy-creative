import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Mobile App Development (Android & iOS)",
  "Web App Development",
  "Custom Email Development",
  "Debugging & Testing",
  "Code Maintenance",
];

const ListOne = () => {
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

export default ListOne;
