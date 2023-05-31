import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import CopyRight from "../../components/footer/copyright/CopyRight";
import HeaderDefault from "../../components/header/HeaderDefault";

const TermsOfService = () => {
  return (
    <Fragment>
      <Helmet>
        <title>bboy creative - Terms of Service</title>
      </Helmet>

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--faq">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Terms of Service</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      Welcome to bboy creative, a software company specializing
                      in the development of mobile and web applications. These
                      Terms of Service ("Terms") govern your access to and use
                      of our applications, websites, and services (collectively
                      referred to as the "Services"). Please read these Terms
                      carefully before using our Services. By using our
                      Services, you agree to be bound by these Terms. If you do
                      not agree to these Terms, please refrain from using our
                      Services. Acceptance of Terms By accessing or using our
                      Services, you affirm that you are at least 18 years old
                      and have the legal capacity to enter into these Terms. If
                      you are using our Services on behalf of an organization,
                      you represent and warrant that you have the authority to
                      bind that organization to these Terms. Privacy and
                      Analytics We are committed to protecting your privacy. Our
                      Privacy Policy explains how we collect, use, and disclose
                      information about you when you use our Services. By using
                      our Services, you consent to the collection, use, and
                      disclosure of your information as described in our Privacy
                      Policy. As part of our efforts to develop user-centric
                      products, we may collect analytics and usage data related
                      to your interaction with our Services. This data may
                      include, but is not limited to, your device information,
                      IP address, browser type, usage patterns, and interactions
                      with our applications and websites. By using our Services,
                      you agree to the collection, use, and storage of this
                      analytics and usage data. We may use this data to improve
                      and personalize our Services, troubleshoot issues, and
                      enhance the overall user experience. Intellectual Property
                      Our Services, including but not limited to the software,
                      code, designs, graphics, trademarks, and any other
                      intellectual property, are owned or licensed by bboy
                      creative. You agree not to modify, reproduce, distribute,
                      sell, or create derivative works based on our Services,
                      unless expressly permitted by us in writing. User
                      Responsibilities When using our Services, you agree to: a.
                      Provide accurate and complete information when creating an
                      account or using our Services. b. Use our Services in
                      compliance with all applicable laws and regulations. c.
                      Not engage in any activity that may disrupt, damage, or
                      interfere with the functionality or security of our
                      Services. d. Not attempt to gain unauthorized access to
                      any part of our Services or bypass any security measures.
                      e. Respect the intellectual property rights of others.
                      Third-Party Content and Services Our Services may contain
                      links to third-party websites, applications, or services.
                      These links are provided for your convenience and do not
                      signify our endorsement of such third-party content or
                      services. We are not responsible for the availability,
                      accuracy, or legality of any third-party content or
                      services. Your interactions with third-party content or
                      services are solely between you and the third party, and
                      we shall have no liability for any damages or losses
                      arising from such interactions. Limitation of Liability To
                      the extent permitted by law, bboy creative and its
                      affiliates, officers, directors, employees, and agents
                      shall not be liable for any indirect, incidental, special,
                      consequential, or punitive damages, including but not
                      limited to, loss of profits, data, or goodwill, arising
                      out of or in connection with these Terms or your use of
                      our Services. Modifications to the Terms We reserve the
                      right to modify these Terms at any time without prior
                      notice. Any changes to the Terms will be effective
                      immediately upon posting. Your continued use of our
                      Services after the changes have been made constitutes your
                      acceptance of the modified Terms. Governing Law and
                      Dispute Resolution These Terms shall be governed by and
                      construed in accordance with the laws of Texas. Any
                      disputes arising out of or relating to these Terms or our
                      Services shall be resolved exclusively through binding
                      arbitration in accordance with the rules of state of
                      Texas. The language of the arbitration shall be English
                      (US), and the arbitration shall take place in San Antonio,
                      Texas. Severability If any provision of these Terms is
                      found to be unenforceable or invalid, the remaining
                      provisions shall remain in full force and effect.
                      <br />
                      <br /> Entire Agreement These Terms constitute the entire
                      agreement between you and bboy creative regarding your use
                      of our Services and supersede any prior agreements or
                      understandings, whether oral or written. If you have any
                      questions or concerns about these Terms, please contact us
                      at jm@bboycreative.com. Last updated: May 31, 2023 <br />
                      <br />
                      By using our Services, you acknowledge that you have read,
                      understood, and agreed to these Terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
        </div>
      </div>
      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default TermsOfService;
