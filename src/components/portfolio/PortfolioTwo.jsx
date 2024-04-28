import React from "react";
import { Link } from "react-router-dom";
const portfolioContent = [
  {
    cat: "Mobile App (iOS & Web)",
    title: "Fried Hard",
    date: "2024",
    routerLink: "https://testflight.apple.com/join/CLTq4Ib0",
    imgPopup: "work-1",
    dataId: "work-1",
  },
  {
    cat: "Mobile App (iOS & Web)",
    title: "Shorty Stacks SA",
    date: "2024",
    routerLink:
      "https://apps.apple.com/us/app/shorty-stacks-sa/id6480261342?platform=iphone",
    imgPopup: "work-1",
    dataId: "work-2",
  },
  {
    cat: "Mobile App (Android & iOS)",
    title: "Cuff & Collar",
    date: "2023",
    routerLink:
      "https://apps.apple.com/us/app/cuff-collar/id6448968519?platform=iphone",
    imgPopup: "work-1",
    dataId: "work-3",
  },
  {
    cat: "Mobile App (Android & iOS)",
    title: "Squeezers Juice Bar",
    date: "2023",
    routerLink:
      "https://apps.apple.com/us/app/squeezers-juice-bar/id6448201711?platform=iphone",
    imgPopup: "work-1",
    dataId: "work-4",
  },

  {
    cat: "Web App Development",
    title: "Jon-Michael Narvaez Website",
    date: "2023",
    routerLink: "https://www.jonmichaelnarvaez.com/",
    imgPopup: "work-1",
    dataId: "work-5",
  },
  {
    cat: "Sticker Pack (iOS)",
    title: "Studio RH Sticker Pack",
    date: "2022",
    routerLink: "https://apps.apple.com/us/app/studio-rh/id1594725975",
    imgPopup: "work-1",
    dataId: "work-6",
  },
  {
    cat: "Sticker Pack (iOS)",
    title: "Things We Say in SA",
    date: "2020",
    routerLink:
      "https://apps.apple.com/us/app/things-we-say-in-sa/id1594445402",
    imgPopup: "work-1",
    dataId: "work-7",
  },
  {
    cat: "Creative Direction, Wardrobe",
    title: "FSM Sports x Ryan Hollins",
    date: "2019",
    routerLink: "https://www.jonmichaelnarvaez.com/",
    imgPopup: "work-1",
    dataId: "work-8",
  },
  {
    cat: "Wardrobe & Style Direction",
    title: "Nside Magazine Cover Shoot",
    date: "2018",
    routerLink: "https://www.jonmichaelnarvaez.com/",
    imgPopup: "work-1",
    dataId: "work-9",
  },
];

const PortfolioTwo = () => {
  return (
    <>
      <div className="grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContent.map((val, i) => (
          <Link
            to={val.routerLink}
            rel="noreferrer noopener"
            target="_blank"
            className="ptf-work ptf-work--style-4"
            key={i}
          >
            <article
              className="ptf-work ptf-work--style-4"
              data-tip
              data-for={val.dataId}
              key={i}
            >
              <div className="ptf-work__category">{val.cat}</div>
              <h4 className="ptf-work__title">{val.title}</h4>
              <div className="ptf-work__date">{val.date}</div>
            </article>
          </Link>
        ))}
      </div>

      <div></div>
    </>
  );
};

export default PortfolioTwo;
