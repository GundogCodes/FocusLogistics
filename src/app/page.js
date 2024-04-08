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
            <div className={styles.leftSection}>
              <div className={styles.section1Div1}>
                <h1>Tailored Shipping Solutions.</h1>
              </div>
              <div className={styles.section1Div2}>
                <h1>Efficient, Reliable, and Personalized for You.</h1>
              </div>
            </div>
            <div className={styles.section1Div3}>
              <h1>Welcome to Focus Logistics</h1>
            </div>
          </div>
          <div className={styles.homeSection2}>
            <div className={styles.text}>
              <h1>Why Choose Us?</h1>
              <ul>
                <li>
                  Welcome to<span> Focus Logistics & Transportation Ltd.</span>,
                  your premier shipping and logistics partner in Alberta and
                  beyond.
                </li>
                <li>
                  With our establishment in November 2021, we've swiftly become
                  a trusted name in the industry, proudly serving clients across
                  all regions of Alberta.
                </li>
                <li>
                  we offer a diverse fleet of vehicles, including cars,
                  minivans, one-ton, and five-ton trucks, ensuring we meet your
                  transportation needs efficiently and reliably.
                </li>
                <li id={styles.longLi}>
                  Strategically positioned, we boast two operational offices in
                  Edmonton and Grand Prairie, along with an additional presence
                  in Calgary.
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
                      Proactive Customer Care
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  We believe in proactive customer care at Focus Logistics. Our
                  dedicated team goes above and beyond to anticipate and address
                  your needs before they arise. Whether it's providing real-time
                  updates on your shipment or offering personalized assistance,
                  we're here to ensure your satisfaction every step of the way.
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
                      Precision Delivery Solutions
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  At Focus Logistics, we prioritize precision in every aspect of
                  our delivery solutions. We meticulously plan and execute each
                  shipment, ensuring timely and accurate deliveries to your
                  destination. Our commitment to precision extends from our
                  operational processes to our customer service, guaranteeing a
                  seamless experience for every client.
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
                      Collaborative Partnership Approach:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  We view our client relationships as partnerships built on
                  collaboration and mutual success. We work closely with you to
                  understand your unique requirements and tailor our services to
                  meet your specific needs. By fostering open communication and
                  transparency, we aim to forge long-lasting partnerships that
                  drive value for your business.
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
                      Safety-First Culture
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  Safety is our top priority. We maintain a rigorous
                  safety-first culture that permeates every aspect of our
                  operations. From comprehensive driver training programs to
                  strict adherence to industry regulations, we ensure the
                  highest standards of safety for our team members, your cargo,
                  and the communities we serve. By prioritizing safety at all
                  times, we provide peace of mind and reliability to our
                  clients, fostering trust and confidence in our services.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles.homeSection3}>
            <div className={styles.text}>
              <span>Our Dedication to Customer Service Sets Us Apart.</span>
              As a trusted transportation and supply chain partner in Western
              Canada, we are renowned for our unwavering commitment to
              excellence. With a seasoned team at the helm, we tackle diverse
              logistics challenges with ease, no matter the scale or complexity.
              Count on us for unparalleled reliability and professionalism every
              step of the way
            </div>
            <div className={styles.s3CardDiv}>
              <div id={styles.topCard} className={styles.s3card}>
                <img src="/images/worker3.jpg" />
                <p>
                  <span> At Focus Logistics</span> we recognize the paramount
                  significance of delivering efficient and secure services to
                  our esteemed clients. Our commitment transcends mere
                  acknowledgment; it's the cornerstone of our operations. With
                  meticulous planning and execution ingrained in our ethos, we
                  prioritize both timeliness and safety in every shipment. Rest
                  assured, your satisfaction and peace of mind remain at the
                  forefront of all we do.
                </p>
              </div>
              <div className={styles.s3card}>
                <img src="/images/worker2.jpg" />
                <p>
                  In a dynamic industry landscape, we thrive on innovation to
                  maintain our leading position. Constantly exploring novel
                  technologies, methodologies, and approaches, we bolster our
                  efficiency, streamline operations, and deliver enhanced value
                  to our clients. Our culture of innovation propels us to stay
                  ahead in the transportation and logistics sector, ensuring we
                  always exceed expectations and pioneer new standards of
                  excellence.
                </p>
              </div>
              <div className={styles.s3card}>
                <img src="/images/multiTruck.jpg" />
                <p>
                  We wholeheartedly recognize the paramount importance of
                  delivering efficient and secure services. Trust in our
                  expertise as we meticulously ensure the safe and timely
                  delivery of your shipments to their designated destinations.
                  Our commitment to prioritizing both timeliness and safety
                  remains unwavering throughout the entire transportation
                  process, guaranteeing your peace of mind every step of the
                  way.
                </p>
              </div>
              <div className={styles.s3card}>
                <img src="/images/worker4.jpg" />
                <p>
                  We believe in fostering collaborative partnerships with our
                  clients, founded on a shared commitment to mutual growth and
                  success. Our approach is centered around actively engaging
                  with you to gain a deep understanding of your individual needs
                  and preferences. Through transparent communication and a
                  dedication to customization, we strive to deliver tailored
                  solutions that not only meet but exceed your expectations.
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
            <img src="/images/logo.png" />
          </div>
        </div>
        <Footer />
      </main>
    </ChakraProvider>
  );
}
