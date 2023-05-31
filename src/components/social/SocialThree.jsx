import React from "react";

const socialList = [
  {
    iconName: "socicon-github",
    link: "https://github.com/jmcancode",
    iconClass: "github",
  },
  {
    iconName: "socicon-apple",
    link: "https://apps.apple.com/us/developer/jon-michael-narvaez/id1246305819",
    iconClass: "apple",
  },
  {
    iconName: "socicon-android",
    link: "https://play.google.com/store/apps/dev?id=4967133014784023982",
    iconClass: "android",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/bboycreativeio",
    iconClass: "instagram",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/in/jmcancode",
    iconClass: "linkedin",
  },
];

const SocialThree = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
      {/* <!--Social Icon--> */}
    </>
  );
};

export default SocialThree;
