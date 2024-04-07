import React from "react";
import styles from "./styles/Heading.module.scss";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
function Heading() {
  return (
    <div className={styles.Heading}>
      <div className={styles.logoDiv}>
        <Link href={"/"}>FOCUS LOGISTICS</Link>
      </div>
      <aside>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </aside>
    </div>
  );
}

export default Heading;
