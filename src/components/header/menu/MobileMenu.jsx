import React from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem, SubMenu, Sidebar } from "react-pro-sidebar";
import Social from "../../social/Social";
// import "react-pro-sidebar/dist/css/styles.css";

const menuContent = [
  {
    name: "Home",
    dropDownItems: [
      {
        name: "Home",
        routerPath: "/",
      },
    ],
  },
  {
    name: "Portfolio",
    dropDownItems: [
      {
        name: "Our Works",
        routerPath: "/works-listing",
      },
    ],
  },
  //   {
  //     name: "Blog",
  //     dropDownItems: [
  //       {
  //         name: "Blog Grid",
  //         routerPath: "/blog-grid",
  //       },
  //       {
  //         name: "Blog Masonry",
  //         routerPath: "/blog-masonry",
  //       },
  //       {
  //         name: "Blog Sidebar",
  //         routerPath: "/blog-sidebar",
  //       },
  //       {
  //         name: "Blog Details",
  //         routerPath: "/blog-details",
  //       },
  //       {
  //         name: "Blog Details Sidebar",
  //         routerPath: "/blog-details-sidebar",
  //       },
  //     ],
  //   },
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <>
          <Sidebar>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu title={item?.name || "Learn More"} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sidebar>
        </>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>bboy creative</span>. All Rights
          Reserved. <br />
          Development by{" "}
          <span>
            <a
              href="https://bboycreative.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              bboy creative
            </a>
          </span>
          .
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
