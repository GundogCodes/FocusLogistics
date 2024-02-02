import React from "react";
import styles from "./styles/about.module.scss";
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
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function about() {
  return (
    <div className={styles.AboutPage}>
      <Heading />
      <div className={styles.AboutPageBody}>
        <h1>Hello About</h1>
        <Menu>
          <MenuButton>Actions</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <Footer />
    </div>
  );
}

export default about;
