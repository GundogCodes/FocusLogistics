import React from "react";
import styles from "./styles/contact.module.scss";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
function contact() {
  return (
    <div className={styles.ContactPage}>
      <Heading />
      <div className={styles.ContactPageBody}>Hello Contact</div>
      <Footer />
    </div>
  );
}

export default contact;
