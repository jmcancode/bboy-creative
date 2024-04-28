import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
//main screen
import HomeAgency from "../views/all-home-version/HomeAgency";
//other screens
import Contact from "../views/inner-pages/Contact";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import AboutMe from "../views/inner-pages/about/AboutMe";
import TermsOfService from "../views/inner-pages/TermsOfService";
import PrivacyPolicy from "../views/inner-pages/PrivacyPolicy";
import Blog from "../components/blog/Blog";

const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeAgency />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/works-showcase" element={<WorksShowcase />} />
        <Route path="/works-listing" element={<WorksListing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;
