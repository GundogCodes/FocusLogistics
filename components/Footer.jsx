import React from "react";
import styles from "./styles/Footer.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.theFooter}>
        <div className={styles.upperSection}>
          <div className={styles.footerSection1}>
            <h3>Contact Us</h3>
            <div className={styles.contactSection}>
              <div className={styles.contactSection1}>
                <h3>Edmonton</h3>
                <div className={styles.infoSection}>
                  <h5>10303 65 Ave NW T6H 1V1</h5>
                  <h5>780-952-4214</h5>
                </div>
              </div>
              <div className={styles.contactSection2}>
                <h3>Grand Prairie</h3>
                <div className={styles.infoSection}>
                  <h5>Unit 206, 9804 100 Ave T8V 0T8</h5>
                  <h5>587-991-4947</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerSection2}>
            <h3>Industries</h3>
            <div className={styles.industriesDiv}>
              <h5>Delivery & Logistics</h5>
              <h5>E-Commerce Deliveries</h5>
              <h5>Blood Bank Deliveries</h5>
              <h5>Dangerous Goods Deliveries</h5>
              <h5>Auto Parts Deliveries</h5>
            </div>
          </div>
          <div className={styles.footerSection3}>
            <h3>Follow Us</h3>
            <div className={styles.linksDiv}>
              <a href="https://linkedin.com">
                <img src="https://www.tforcelogistics.com/wp-content/uploads/2020/06/linkedin-1.png" />
              </a>
              <a href="https://facebook.com">
                <img src="https://www.tforcelogistics.com/wp-content/uploads/2020/06/facebook.png" />
              </a>
              <a href="https://x.com">
                <img src="https://www.tforcelogistics.com/wp-content/uploads/2023/10/icons8-twitterx-24.png" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.lowerSection}>
          <h4> &#169; 2024 JMD Canada. All Rights Reserved.</h4>
          <h4>
            <Link href="/">Home</Link>
          </h4>
          <h4>
            <Link href="/contact"> Contact Us</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
