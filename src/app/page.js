import Image from "next/image";
import styles from "./page.module.scss";
import Heading from "../../components/Heading";
import Link from "next/link";
import Footer from "../../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <Heading />
        <div className={styles.mainBody}>
          <div className={styles.homeSection1}>
            <div className={styles.section1Div1}>
              <h2>ECOMMERCE DELIVERY SERVICE</h2>
              <h1>Same-Day, Next-Day guaranteed!</h1>
              <p>
                eCommerce delivery experts at your service! We make any business
                competitive with next-day shipping on a variety of products.
                From your warehouse or store to your customer’s front door, we
                ensure safe and swift delivery
              </p>
            </div>
            <div className={styles.section1Div2}>
              <h1>Efficient and Reliable Shipment Solutions</h1>
              <h1>Tailored to Your Needs</h1>
            </div>
          </div>
          <div className={styles.homeSection2}>
            <div className={styles.text}>
              <h1>Why Choose Us?</h1>
              <ul>
                <li>
                  <span> At JMD Canada Transportation</span> is a leading
                  shipping and logistics company serving Alberta and beyond.
                </li>
                <li>
                  We have two strategically located offices in Edmonton and
                  Grand Prairie.
                </li>
                <li>
                  Our location sallow us to deliver goods to any destination
                  within the province.
                </li>
                <li id={styles.longLi}>
                  We maintain direct control over all operations through our
                  extensive network of terminals and dedicated team of
                  professionals.
                </li>
              </ul>
            </div>
            <Accordion
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
              }
              borderRadius={"6px"}
              width={"40%"}
              height={"80%"}
              allowToggle
              backgroundColor={"white"}
              className={styles.accordion}
            >
              <h1 className={styles.accordionValues}>Our Values</h1>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Reliability
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  At JMD Canada Transportation, reliability is at the core of
                  everything we do. We understand the importance of delivering
                  shipments on time and in perfect condition. Our customers
                  trust us to fulfill our commitments consistently, ensuring
                  peace of mind and smooth operations for their businesses.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Customer-Centricity
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  We prioritize our customers' needs above all else. Our
                  dedicated team goes above and beyond to understand and cater
                  to the unique requirements of each client. We are committed to
                  providing exceptional service and building long-lasting
                  relationships based on trust, transparency, and
                  responsiveness.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Quality
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  At JMD Canada Transportation, we prioritize delivering
                  excellence in every aspect of our service. We are dedicated to
                  maintaining the highest standards of quality in our
                  operations, from the condition of our vehicles to the
                  professionalism of our staff. By consistently exceeding
                  expectations and adhering to rigorous quality control
                  measures, we ensure that every shipment is handled with care
                  and precision. Our unwavering commitment to quality sets us
                  apart as a trusted and reliable partner for all your
                  transportation and logistics needs.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Integrity
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  Integrity is the foundation of our business. We conduct
                  ourselves with honesty, fairness, and ethical behavior in all
                  our interactions, both internally and externally. Our
                  commitment to integrity means that our customers can rely on
                  us to uphold the highest standards of professionalism,
                  transparency, and accountability in everything we do.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles.homeSection3}>
            <div className={styles.text}>
              <span>Our Commitment To Customer Service is Unmatched</span>
              We take pride in our reputation as one of the most dependable
              transportation and supply chain service providers in Western
              Canada. Our experienced team is equipped to handle even the most
              complex logistics challenges, regardless of the size or scope of
              the shipment or supply chain issue.
            </div>
            <div className={styles.s3CardDiv}>
              <div id={styles.s3card}>
                <img src="https://media.istockphoto.com/id/1189954840/photo/truck-driver-holding-tablet-and-checking-route-for-new-destination-in-background-parked-truck.jpg?s=612x612&w=0&k=20&c=875cGSOE9P3GHiltFtqxIwELrZARfiNcqC7cD-xW348=" />
                <p>
                  <span> At JMD Canada Transportation</span> We deeply
                  understand and appreciate the critical importance of ensuring
                  efficient and secure delivery services for our valued clients.
                  Our commitment goes beyond mere acknowledgment; it's a
                  foundational principle that drives every aspect of our
                  operations. We stand firm in our dedication to meticulously
                  plan and execute each shipment, prioritizing both timeliness
                  and safety.
                </p>
              </div>
              <div id={styles.s3card}>
                <img src="https://media.istockphoto.com/id/1285071058/photo/smiling-chief-standing-in-auto-park-and-holding-tablet-in-background-are-trucks-firm-for.jpg?s=612x612&w=0&k=20&c=l2-AIhwSromV_DHpGJmPqL1U2v9cBQLhjIvPTnV23vY=" />
                <p>
                  In an ever-evolving industry, we embrace innovation to stay
                  ahead of the curve. We continuously seek out new technologies,
                  processes, and strategies to enhance our efficiency, optimize
                  our operations, and provide added value to our customers. By
                  fostering a culture of innovation, we ensure that we remain at
                  the forefront of the transportation and logistics sector.
                </p>
              </div>
              <div id={styles.s3card}>
                <img src="https://media.istockphoto.com/id/1396633199/photo/happy-truck-driver-looking-through-side-window-while-driving-his-truck.jpg?s=612x612&w=0&k=20&c=VA7ggpLITCRxjuhKrYlwkFc4-M7e2Q7aie_mYQqVkwg=" />
                <p>
                  We deeply acknowledge the critical importance of executing
                  efficient and secure delivery services. Rely on our expertise
                  to meticulously ensure the safe and prompt delivery of your
                  shipments to their designated destinations, prioritizing both
                  timeliness and safety throughout the entire transportation
                  process.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.homeSection5}>
            <h1>Ready to order?</h1>
            <Text>
              <Link href="/contact">
                <span>Get a Quote now!</span>
              </Link>
            </Text>
          </div>
          <div className={styles.homeSection4}>
            <img src="/images/JMDLogo2.png"></img>
          </div>
        </div>
        <Footer />
      </main>
    </ChakraProvider>
  );
}
