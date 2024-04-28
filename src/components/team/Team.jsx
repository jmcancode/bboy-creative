import React from "react";
import { Link } from "react-router-dom";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Jon-Michael Narvaez",
    designation: "Chief Creative & Senior Developer",
    routerLink: "https://www.linkedin.com/in/jmcancode/",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <Link
                to={val.routerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src={require(`../../assets/img/root/team/${val.img}.jpg`)}
                  alt={val.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Link>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="/#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
