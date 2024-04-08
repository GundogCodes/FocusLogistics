import styles from "./styles/services.module.scss";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";
function services() {
  const [logClicked, setLogClicked] = useState(true);
  const [eComClicked, setEComClicked] = useState(false);
  const [autoClicked, setAutoClicked] = useState(false);
  function clickedAService(e) {
    if (e.target.innerText === "Delivery & Logistics Services") {
      e.target.style.backgroundColor = "rgb(107, 189, 148)";
      e.target.style.color = "white";
      setLogClicked(true);
      setEComClicked(false);
      setAutoClicked(false);
    } else if (e.target.innerText === "Medicinal Deliveries") {
      e.target.style.backgroundColor = "rgb(107, 189, 148)";
      e.target.style.color = "white";
      setLogClicked(false);
      setEComClicked(true);
      setAutoClicked(false);
    } else if (e.target.innerText === "Auto Parts Deliveries") {
      e.target.style.backgroundColor = "rgb(107, 189, 148)";
      e.target.style.color = "white";
      setLogClicked(false);
      setEComClicked(false);
      setAutoClicked(true);
    }
  }
  return (
    <div className={styles.Services}>
      <Heading />
      <div className={styles.servicesBody}>
        <div className={styles.banner}>
          {/* <img src="https://www.transportationservices.ca/wp-content/uploads/2018/06/truck-transportation.jpg" /> */}

          <div className={styles.sideSection}>
            <h1>Logistics Solutions </h1>
            <h2>
              We offer reliable shipping services that ensure smooth
              door-to-door delivery, featuring competitive rates customized to
              your specific shipping requirements.
            </h2>
            <Link href="/contact">
              <h3>Request A Quote</h3>
            </Link>
          </div>
        </div>
        <div className={styles.upperSection}>
          <div className={styles.textDiv}>
            <h1>Streamline Your Transportation with Focus Logistics</h1>
            <h2>
              Whether your shipments are local or spanning across vast
              distances, we specialize in crafting customized solutions to align
              with your requirements, budget, and deadlines.
            </h2>
          </div>
          <h2></h2>
          <ul>
            <li className="log" onClick={clickedAService}>
              <h3>Delivery & Logistics Services</h3>
            </li>
            <li className="ecom" onClick={clickedAService}>
              <h3>Medicinal Deliveries</h3>
            </li>
            <li className="auto" onClick={clickedAService}>
              <h3>Auto Parts Deliveries</h3>
            </li>
          </ul>

          <div className={styles.upperMainSection}>
            {logClicked ? (
              <div className={styles.serviceDisplayLog}>
                <h1>Delivery & Logistics</h1>
                <div className={styles.servicesInnerDiv}>
                  <p>
                    We offer a wide range of comprehensive delivery and
                    logistics solutions meticulously designed to address your
                    unique requirements and challenges. Our dedicated team works
                    closely with you to understand your specific needs, allowing
                    us to tailor our services accordingly. From initial planning
                    to final delivery, we prioritize the seamless and secure
                    transportation of your goods, ensuring that they reach their
                    destination on time and in perfect condition. Whether you
                    require specialized handling, expedited shipping, or regular
                    freight services, you can trust us to provide customized
                    solutions that meet and exceed your expectations.
                  </p>
                  <div className={styles.graphicAside}>
                    <img src="/images/worker5.jpg" />
                    <h4>Customized solutions tailored to your needs</h4>
                    <h4>Efficient and secure transportation services</h4>
                    <h4>Dedicated team committed to excellence</h4>
                    <h4>Seamless door-to-door delivery options</h4>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {eComClicked ? (
              <div className={styles.serviceDisplayCom}>
                <h1>Medicinal Deliveries</h1>
                <div className={styles.servicesInnerDiv}>
                  <div className={styles.graphicAside}>
                    <img src="/images/worker6.jpg" />
                    <h4>Specialized services for urgent deliveries</h4>
                    <h4>Swift and secure transportation of medical supplies</h4>
                    <h4>Reliable delivery services for critical shipments</h4>
                  </div>
                  <p>
                    Our specialized services encompass a diverse range of
                    offerings, catering to specific industries and unique
                    requirements. We excel in providing safe and efficient
                    delivery solutions tailored specifically for e-commerce
                    shipments, ensuring that your products reach your customers
                    promptly and securely. Additionally, we understand the
                    critical importance of urgent deliveries for blood banks and
                    medical facilities. With our dedicated team and specialized
                    logistics expertise, we prioritize the swift and secure
                    transportation of medical supplies, ensuring that they are
                    delivered to their destinations in a timely manner, without
                    compromising on safety or integrity. Whether it's fulfilling
                    online orders or delivering lifesaving medical supplies, you
                    can rely on us to provide specialized services that meet the
                    highest standards of reliability and efficiency.
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {autoClicked ? (
              <div className={styles.serviceDisplayAuto}>
                <h1>Auto Parts Deliveries</h1>
                <div className={styles.servicesInnerDiv}>
                  <div className={styles.graphicAside}>
                    <img src="/images/worker7.jpg" />
                    <h4>Efficient transportation of auto parts</h4>
                    <h4>Timely and reliable delivery services</h4>
                    <h4>Streamlined transportation process</h4>
                  </div>
                  <p>
                    At JMD Canada Transportation, we have honed our expertise in
                    the efficient transportation of auto parts, catering
                    specifically to the needs of automotive businesses. With a
                    keen understanding of the automotive industry's demands and
                    challenges, we prioritize the timely and reliable delivery
                    of auto parts to ensure that businesses can maintain
                    seamless operations. Our dedicated team works tirelessly to
                    streamline the transportation process, from order
                    fulfillment to final delivery, optimizing routes and
                    schedules to maximize efficiency. Whether it's delivering
                    components for repairs or restocking inventory, you can rely
                    on us to provide prompt and dependable transportation
                    solutions that keep automotive businesses running smoothly
                    and effectively.
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default services;
