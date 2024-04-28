import React from "react";

const serviceList = [
  { name: "Mobile Development", number: "10" },
  { name: " Web Development", number: "9" },
  { name: "App Treatments", number: "60" },
  { name: "UX Research", number: "29" },
  { name: "Prototyping", number: "25" },
];

const ServiceListFive = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-1"
      style={{
        "--ptf-font-family": "var(--ptf-primary-font)",
        "--ptf-font-weight": "300",
      }}
    >
      {serviceList.map((val, i) => (
        <li key={i}>
          <div>
            {val.name}
            <span>{val.number}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceListFive;
