import React from "react";

const portfolioContent = [
  {
    cat: "Mobile App (iOS & Web)",
    title: "Shorty Stacks SA",
    date: "2024",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-1",
  },
  {
    cat: "Mobile App (Android & iOS)",
    title: "Cuff & Collar",
    date: "2023",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-2",
  },
  {
    cat: "Mobile App (Android & iOS)",
    title: "Squeezers Juice Bar",
    date: "2023",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-3",
  },

  {
    cat: "Web App Development",
    title: "Jon-Michael Narvaez Website",
    date: "2023",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-4",
  },
  {
    cat: "Sticker Pack (iOS)",
    title: "Studio RH Sticker Pack",
    date: "2022",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-5",
  },
  {
    cat: "Sticker Pack (iOS)",
    title: "Things We Say in SA",
    date: "2020",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-6",
  },
  {
    cat: "Creative Direction, Wardrobe",
    title: "FSM Sports x Ryan Hollins",
    date: "2019",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-7",
  },
  {
    cat: "Wardrobe & Style Direction",
    title: "Nside Magazine Cover Shoot",
    date: "2018",
    routerLink: "/works-showcase",
    imgPopup: "work-1",
    dataId: "work-8",
  },
];

const PortfolioTwo = () => {
  return (
    <>
      <div className="grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContent.map((val, i) => (
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
        ))}
      </div>

      <div></div>
    </>
  );
};

export default PortfolioTwo;
