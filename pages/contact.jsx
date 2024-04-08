import React, { useState } from "react";
import styles from "./styles/contact.module.scss";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function contact() {
  const [messageSent, setMessageSent] = useState(false);
  return (
    <div className={styles.ContactPage}>
      <Heading />
      <div className={styles.ContactPageBody}>
        <div className={styles.ContactSection1}>
          <h2>Contact us</h2>
          <h3>
            Hello from Focus Logistics & Transportation LTD.! We're committed to
            assisting you with any inquiries, questions, or feedback you may
            have. Don't hesitate to reach out to us using the contact details
            provided below. We're here to help!"
          </h3>
        </div>
        <div className={styles.ContactSection2}>
          <h2>Contact Information</h2>
          <div className={styles.contactInfoDiv}>
            <div className={styles.contactInfo1}>
              <h3>Edmonton</h3>
              <h3>Mandeep Singh</h3>
              <a href="tel:+5875914001">(587) 591-4001</a>
            </div>
            <div className={styles.contactInfo2}>
              <h3>Grande Prairie</h3>
              <h3>Ompal Taya</h3>
              <a href="tel:+7802451258">(780) 245-1258</a>
            </div>
          </div>
          <h4>Email</h4>
          <a className={styles.email} href="mailto:focuscanadaltd@gmail.com">
            focuscanadaltd@gmail.com
          </a>
        </div>
        <div className={styles.ContactSection3}>
          <h2>General Inquiries</h2>
          <form action="https://formsubmit.co/jmd.mani@gmail.com" method="POST">
            <div className={styles.inputSection}>
              <label>First Name</label>
              <input type="text" name="firstName" required></input>
              <label>Last Name</label>
              <input type="text" name="lastName" required></input>
              <label>Your Email</label>
              <input type="text" name="email" required></input>
              <label>Message</label>
              <input
                id={styles.messageSection}
                type="text"
                name="message"
                required
              ></input>
              <button
                onClick={() => {
                  setMessageSent(!messageSent);
                }}
                style={{
                  marginTop: "10px",
                  padding: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                }}
              >
                Submit
              </button>
              {messageSent ? <h3>Sent!</h3> : <h3></h3>}
            </div>
          </form>
        </div>
        {/* <div className={styles.ContactSection4}>
          <h2>Locations</h2>
          <h3>Edmonton</h3>
          <h3>Grand Prarie</h3>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default contact;
