import React, { useState } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [projectGoal, setProjectGoal] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState([
    "2500-5000",
    "5000-10000",
    "10000-20000",
    "30000 and over",
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "contacts", "prospects");
    const payload = {
      name,
      organization,
      email,
      projectGoal,
      timeline,
      budget,
    };

    await setDoc(docRef, {
      ...payload,
      createdAt: Timestamp.now(),
    }).then(() => {
      alert("Thank you for your submission. We will be in touch shortly.");
    });

    setName("");
    setOrganization("");
    setEmail("");
    setTimeline("");
    setProjectGoal("");
    setBudget("");
  };

  return (
    <form onSubmit={onSubmit} className="contact_form">
      <div className="ptf-form-group">
        <label data-number="01">What’s your name?</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="02">What’s the name of your organization?</label>
        <input
          type="text"
          name="organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="03">What’s your email address?</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="04">Tell us about your project goals.</label>
        <textarea
          type="text"
          name="projectGoal"
          value={projectGoal}
          onChange={(e) => setProjectGoal(e.target.value)}
        />
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="05">Do you have a timeline in mind?</label>
        <input
          type="text"
          name="timeline"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
        />
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="06">What have you budgeted for this project?</label>
        <select
          name="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="2500-5000">$2,500-5,000</option>
          <option value="5000-10000">$5,000-10,000</option>
          <option value="10000-20000">$10,000-20,000</option>
          <option value="30000 and over">$30,000 and over</option>
        </select>
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.5rem" }}></div>

      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

      <button type="submit" className="ptf-submit-button">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
      {/* End .ptf-submit-button */}
    </form>
  );
};

export default ContactForm;
