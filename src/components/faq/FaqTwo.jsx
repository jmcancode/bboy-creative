import React from "react";
import { Link } from "react-router-dom";

const faqContent = [
  {
    title: "Progress",
    faqInner: [
      {
        title: "What can we accept working with bboy creative?",
        descriptions: `
        All prospects are given a free discovery meeting to listen to your ideas and vision and have a general discussion on how we can help you achieve your goals.
        We follow the 50/30/20 method to ensure that you are a part of the entire build process and there are no surprises in your project.
        This method allows both parties to have a clear understanding of the project and the expectations of the final product.
        `,
      },
      {
        title: "Do you provide a NDA Agreement?",
        descriptions: `
        Yes we do. All projects include a NDA agreement that will be signed by both parties before the project begins.
        If you would like to provide your own NDA agreement we can discuss that in our initial consultation and have our 
        legal representation read and approve it.
        `,
      },
      {
        title: "How many revisions times that I get?",
        descriptions: `
        All projects include 4 revisions. This allows us to make sure that we are on the same page and that we are building the product that you want
        and not cutting into project schedules. If you would like to purchase more revisions we can discuss that in our initial consultation.
  
        `,
      },
      {
        title: "How long for a project to be completed?",
        descriptions: `
        All projects are different and require different amounts of time to complete based on the complexity of your build. We will discuss the timeline of your project in our initial consultation.
        On Average, most projects take between 180 - 300+ hours to complete.
        `,
      },
      {
        title: "On Average, how much does a project cost?",
        descriptions: `
        There are many different factors that go into pricing a project. Time and complexity are the two main factors that go into pricing a project.
        We always ask everyone to do some research on their own to get a general idea of what they would like to spend on their project. 
        That said, most project take between 180 - 300+ hours to complete and bill at a rate of $57 upwards of $157 per hour.
        Again, this is just a general idea of what you can expect to spend on your project. We will discuss the pricing of your project in our initial consultation.

        
        `,
      },
    ],
  },
  {
    title: "Payment",
    faqInner: [
      {
        title: "What payment methods are accepted?",
        descriptions: `We accept all major credit cards except American Express. Cash and checks are also accepted. Checks can be made payable to Jon-Michael Narvaez.
        All Payment are made through our invoicing system.
        `,
      },
      {
        title: "Will I have to leave a deposit?",
        descriptions: `
        Yes, all projects will require a 50% deposit before work begins. We follow the 50/30/20 method to ensure that you
        are a part of the entire process. Once you've agreed to the prototype or design the next 30% will be due. The final
        20% will be due once the project is complete and ready to be launched.
        `,
      },
    ],
  },
  {
    title: "Support",
    faqInner: [
      {
        title: "Is Hosting and Domain included in my price?",
        descriptions: `
          If a project does not have a domain we can include those costs in your bill. Hosting services are required
          for all projects and the frees are included in your maintenance contract. If you would like to use your own hosting
          services we can discuss that in our initial consultation. 
        `,
      },
      {
        title: "How can I cancel or change my project?",
        descriptions: `Once a project has commenced or the 30% payment has been cleared, you will be unable to cancel or change your project. If you have any questions or concerns, please contact us at jm@bboycreative.com. The 
        50% deposit is non-refundable.
        `,
      },
      {
        title: "How long for support service?",
        descriptions: `
        Apart from the initial project fees all projects enter into a 12-24 month maintenance contract. This contract includes
        24/7 support for bugs, performance updates, and security updates. This contract does not include any new features or
        UX/UI change. Any new features or UX/UI changes will be billed at an hourly rate.
        `,
      },
      {
        title: "What’s files will I  receive?",
        descriptions: `
        All projects are different and unless agreed upon before the project begins, bboy creative will retail all ownership rights to source code and the files 
        used to create the project. If you would like to purchase the source code and files used to create the project we can price that for you
        in our initial consultation.
        `,
      },
    ],
  },
];

const FaqTwo = () => {
  return (
    <section>
      {/* <!--Spacer--> */}

      <div className="container-xxl">
        {faqContent.map((item, i) => (
          <div key={i}>
            <div className="ptf-animated-block" data-aos="fade">
              {/* <!--FAQ--> */}
              <div className="ptf-faq">
                <div className="ptf-faq__category">
                  <h3>{item.title}</h3>
                </div>
                <div className="ptf-faq__content">
                  {item.faqInner.map((val, i) => (
                    <div className="ptf-faq__item" key={i}>
                      <div className="ptf-faq__question">
                        <h6>{val.title}</h6>
                      </div>
                      <div className="ptf-faq__answer">
                        <p>{val.descriptions}</p>
                      </div>
                    </div>
                  ))}
                  {/* End .ptf-faq__item */}
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem" }}
            ></div>
          </div>
        ))}

        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "4.375rem" }}></div>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade">
          <p className="fz-24">
            Don’t find your question?{" "}
            <Link
              className="text-decoration-underline --ptf-accent-1"
              to="/contact"
            >
              Contact us{" "}
            </Link>
            now, we alway willing to help you.
          </p>
        </div>
      </div>
      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
      ></div>
    </section>
  );
};

export default FaqTwo;
