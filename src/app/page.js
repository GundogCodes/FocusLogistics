import Image from "next/image";
import styles from "./page.module.scss";
import Heading from "../../components/Heading";
import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <Heading />
        <div className={styles.mainBody}>
          <Link href={"/about"}>
            <h1>Go to About Page</h1>
          </Link>
          <Link href={"/contact"}>
            <h1>Go To Contact Page</h1>
          </Link>
        </div>
        <Footer />
      </main>
    </ChakraProvider>
  );
}
