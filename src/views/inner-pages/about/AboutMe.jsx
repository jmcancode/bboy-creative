import React from "react";
import { Helmet } from "react-helmet";
import BrandFour from "../../../components/brand/BrandFour";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ServiceListFive from "../../../components/list/ServiceListFive";
import Resume from "../../../components/Resume";
import SocialTwo from "../../../components/social/SocialTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-me">
      <Helmet>
        <title>bboy creative - meet JM</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-me">
            {/*=============================================
                Start About Me Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-7 order-xl-2 text-center">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="400"
                    >
                      <div className="ptf-custom--5512">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image">
                          <img
                            src={require("../../../assets/img/about-me-main-image.png")}
                            alt="layer"
                            loading="lazy"
                            style={{
                              zIndex: "2",
                              height: "60em",
                              width: "60em",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-5">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-secondary-font fw-normal">
                        Jon-Michael "JM" Narvaez
                      </h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.5625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-24 text-uppercase">
                        Senior Full-Stack <br />
                        Engineer
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "8.125rem",
                        "--ptf-md": "4.0625rem",
                      }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="200"
                    >
                      <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                        Biography
                      </h5>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p className="fz-30 has-black-color has-secondary-font">
                        Creative problem solver with over <br />
                        10 years of entrepreneurship & <br />5 years of software
                        engineering.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                        Contact
                      </h5>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p className="fz-30 has-black-color has-secondary-font">
                        San Antonio, Texas <br />
                        <a href="mailto:hello@brunoerdison.com">
                          jm@bboycreative.com
                        </a>
                        <br />
                        <a href="tel:+6835688986">+1 210 454 4340</a>
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      <div className="has-black-color">
                        <SocialTwo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
            Start Service  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h5 className="fz-14 text-uppercase has-2-color fw-normal">
                    Our Services
                  </h5>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  {/* <!--Services List--> */}
                  <ServiceListFive />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
            Start Advantage Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 has-secondary-font fw-normal ">
                    My Advantage
                  </h2>
                </div>
                {/* End title */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                ></div>

                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "3.125rem",
                    "--bs-gutter-y": "3.125rem",
                  }}
                >
                  <BrandFour />
                </div>
                {/* End brand */}
              </div>
              {/* End .container */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section className="ptf-custom--1528">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>

              {/*=============================================
                Start Education & Experience Section 
                ============================================== */}
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 has-secondary-font fw-normal ">
                    Education & Experience
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": " 5rem", "--ptf-md": "2.5rem" }}
                ></div>
                <div className="row" style={{ "--bs-gutter-y": "90px" }}>
                  <Resume />
                </div>
              </div>
              {/* End .container-xxl */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>
            </section>
            {/* End mulitblock */}

            {/*=============================================
                Start Instagram Grid 
                ============================================== */}
            <section>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="has-secondary-font fw-normal text-center">
                    <Link to="https://www.instagram.com/jmcancode">
                      @bboycreative.io
                    </Link>
                  </h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
                ></div>
              </div>
            </section>
          </div>
        </div>
        {/* End ptf-main */}
      </div>
      {/* End ptf-site-wrapper__inner */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-6">
        <div className="container-xxl">
          <FooterTwo />
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
