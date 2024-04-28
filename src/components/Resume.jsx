import React from "react";

const resumeContent = [
  {
    year: "2013 & 2019",
    delayAnimation: "",
    infoContent: [
      {
        title: " Bachelor Degree of Social Science",
        subTitle: "University of Texas at San Antonio, US",
      },
      {
        title: "Full Stack Development",
        subTitle: " Zero to Mastery.io, CA",
      },
    ],
  },
  {
    year: "2020 - 2023",
    delayAnimation: "",
    infoContent: [
      {
        title: "Senior React Native Developer",
        subTitle: "Better Than Vegas, US",
      },
      {
        title: "React Native Developer",
        subTitle: "Giddy, US",
      },
      {
        title: "Senior React Native Developer",
        subTitle: "J12 Designs, US",
      },
    ],
  },
  {
    year: "2019 - PRESENT",
    delayAnimation: "",
    infoContent: [
      {
        title: "Chief Creative / Founder",
        subTitle: "bboy creative llc",
      },
      {
        title: "Design Director / Master Stylist",
        subTitle: "The Royal Guard - Style Agency",
      },
    ],
  },
];

const Resume = () => {
  return (
    <>
      {resumeContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Timeline--> */}
            <div className="ptf-timeline">
              <div className="ptf-timeline__year">{item.year}</div>
              <ul className="ptf-timeline__list">
                {item.infoContent.map((val, i) => (
                  <li className="ptf-timeline__item" key={i}>
                    <h4 className="ptf-timeline__title">{val.title}</h4>
                    <p className="ptf-timeline__description">{val.subTitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
