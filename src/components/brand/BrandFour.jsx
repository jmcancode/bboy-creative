import React from "react";
import { FaFigma, FaHandshake } from "react-icons/fa";
import { IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiAdobexd, SiAdobeindesign } from "react-icons/si";

const brandContent = [
  {
    dealyAnimation: "0",
    icon: (
      <IoLogoReact
        style={{
          fontSize: "90px",
          color: "#61DBFB",
        }}
      />
    ),
    percentage: "95",
    title: "React Native Cli",
  },
  {
    dealyAnimation: "100",
    icon: <IoLogoFirebase style={{ fontSize: "90px", color: "#FFCA28" }} />,
    percentage: "95",
    title: "Firebase",
  },
  {
    dealyAnimation: "200",
    icon: (
      <SiAdobexd
        style={{
          fontSize: "90px",
          color: "#FF26BE",
        }}
      />
    ),
    percentage: "82",
    title: "Adobe XD",
  },
  {
    dealyAnimation: "300",
    icon: (
      <FaFigma
        style={{
          fontSize: "90px",
          color: "#F24E1E",
        }}
      />
    ),
    percentage: "85",
    title: "Figma",
  },
  {
    dealyAnimation: "400",
    icon: (
      <SiAdobeindesign
        style={{
          fontSize: "90px",
          color: "#FF3366",
        }}
      />
    ),
    percentage: "85",
    title: "Adobe InDesign",
  },
  {
    dealyAnimation: "500",
    icon: (
      <FaHandshake
        style={{
          fontSize: "90px",

          color: "#c60000",
        }}
      />
    ),
    percentage: "98",
    title: "Communication",
  },
];

const BrandFour = () => {
  return (
    <>
      {brandContent.map((val, i) => (
        <div className="col-6 col-md-4 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.dealyAnimation}
          >
            {/* <!--Advantage Box--> */}
            <div
              className="ptf-advantage-box"
              style={{ "--ptf-image-height": "90px" }}
            >
              <div className="ptf-advantage-box__content">
                <div className="ptf-advantage-box__image">
                  {typeof val.icon === "string" ? (
                    <img
                      src={`assets/images/brand/${val.icon}.png`}
                      alt="brand"
                    />
                  ) : (
                    val.icon
                  )}
                </div>
                <div className="ptf-advantage-box__value">{val.percentage}</div>
              </div>
              <h6 className="ptf-advantage-box__title">{val.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandFour;
