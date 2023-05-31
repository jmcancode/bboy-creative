import React from "react";
import { Link } from "react-router-dom";

const footerItems = [
  { itemName: "Faqs", link: "/faq" },
  { itemName: "Term & Conditions", link: "/terms-of-service" },
  { itemName: "Privacy Policy", link: "/privacy-policy" },
  // { itemName: "Help", link: "" },
  // { itemName: "Works", link: "" },
  // { itemName: "Studio", link: "" },
  // { itemName: "News", link: "" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
