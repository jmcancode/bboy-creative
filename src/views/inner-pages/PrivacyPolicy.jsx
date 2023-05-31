import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import CopyRight from "../../components/footer/copyright/CopyRight";
import HeaderDefault from "../../components/header/HeaderDefault";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Helmet>
        <title>bboy creative - Privacy Policy</title>
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
                    <h1 className="large-heading">Privacy Policy</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      This Privacy Policy ("Policy") explains how bboy creative
                      collects, uses, and protects your personal information
                      when you use our mobile and web applications, websites,
                      and services (collectively referred to as the "Services").
                      We are committed to respecting and safeguarding your
                      privacy. Please read this Policy carefully to understand
                      our practices regarding your personal information. By
                      using our Services, you consent to the collection, use,
                      and disclosure of your information as described in this
                      Policy.
                      <br />
                      <br />
                      Information We Collect We may collect the following types
                      of information when you use our Services:
                      <br />
                      <br /> a. Personal Information: We may collect personal
                      information that you provide to us voluntarily, such as
                      your name, email address, and other contact details when
                      you create an account or communicate with us.
                      <br />
                      <br /> b. Usage and Analytics Data: We may collect
                      non-personal information about your interactions with our
                      Services, such as your device information, IP address,
                      browser type, usage patterns, and interactions with our
                      applications and websites. This data helps us understand
                      how our Services are used and allows us to improve and
                      personalize them. <br />
                      <br />
                      Use of Information We use the information we collect for
                      the following purposes: a. To provide and improve our
                      Services: We use your information to deliver and enhance
                      our Services, personalize your user experience, and
                      respond to your inquiries or requests. <br />
                      <br />
                      b. Analytics and Product Development: We may use the
                      information, including usage and analytics data, to
                      analyze trends, track user activities, and develop
                      insights to improve our products and user experience. We
                      do not sell or trade your data with any third-party
                      advertisers.
                      <br />
                      <br /> c. Communication: We may use your contact
                      information to send you important updates, notifications,
                      and marketing communications related to our Services. You
                      can opt-out of receiving marketing communications by
                      following the instructions provided in the communication
                      or by contacting us directly. Data Retention We will
                      retain your personal information for as long as necessary
                      to fulfill the purposes outlined in this Policy, unless a
                      longer retention period is required or permitted by law.
                      We will securely delete or anonymize your personal
                      information when it is no longer needed.
                      <br />
                      <br /> Data Security We take reasonable measures to
                      protect your personal information from unauthorized
                      access, disclosure, alteration, or destruction. However,
                      please be aware that no method of transmission over the
                      internet or electronic storage is 100% secure, and we
                      cannot guarantee the absolute security of your
                      information. Third-Party Services and Links Our Services
                      may contain links to third-party websites, applications,
                      or services. This Policy does not apply to such
                      third-party services, and we are not responsible for their
                      privacy practices. We encourage you to review the privacy
                      policies of those third parties before interacting with
                      their services. <br />
                      <br />
                      Children's Privacy Our Services are not intended for
                      children under the age of 13. We do not knowingly collect
                      personal information from children. If you believe that we
                      may have inadvertently collected personal information from
                      a child, please contact us, and we will take appropriate
                      steps to delete that information. Your Rights and Choices
                      You have certain rights regarding your personal
                      information, including the right to access, update,
                      correct, or delete your information. You may also have the
                      right to object to or restrict certain processing
                      activities or withdraw your consent.
                      <br />
                      <br /> To exercise these rights, please contact us using
                      the information provided at the end of this Policy.
                      Changes to the Privacy Policy We reserve the right to
                      modify or update this Policy at any time. We will notify
                      you of any material changes by posting the updated Policy
                      on our website or through other communication channels.{" "}
                      <br />
                      <br />
                      Your continued use of our Services after the changes have
                      been made constitutes your acceptance of the modified
                      Policy.
                      <br />
                      <br /> Contact Us If you have any questions, concerns, or
                      requests regarding this Policy or our privacy practices,
                      please contact us at jm@bboycreative.com. <br />
                      <br />
                      Last updated: May 31, 2023 By using our Services, you
                      acknowledge that you have read, understood, and agreed to
                      this Privacy Policy.
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

export default PrivacyPolicy;
