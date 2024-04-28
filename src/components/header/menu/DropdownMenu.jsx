import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Our Works",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Our works",
        routerPath: "/works-listing",
      },
    ],
  },

  {
    name: "About",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/about-me",
      },
    ],
  },

  {
    name: "Contact",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Contact",
        routerPath: "/contact",
      },
    ],
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="/works-listing" className={item.activeClass}>
            <span>{item.name}</span>
          </a>

          <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
