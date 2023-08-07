import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";
import CameraIcon from "../assets/icons/CameraIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import MenuIcon from "../assets/icons/MenuIcon";
import TabLists from "./TabLists";
import Paths from "./Paths";

const Navbar = ({ children }) => {
  return (
    <View style={styles.Headers}>
      <View style={styles.NavSection}>
        <View style={styles.navbar}>
          <Text style={styles.heading}>WhatsApp</Text>
          <View style={styles.features}>
            <CameraIcon />
            <SearchIcon />
            <MenuIcon />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Headers: {
    width: "100%",
    height: "14%",
    paddingTop: 53,
    backgroundColor: "#00a884",
    justifyContent: "space-between",
  },
  NavSection: {
    height: 90,
    justifyContent: "space-between",
  },
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 17,
    paddingRight: 17,
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
  },
  features: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
  },
});

export default Navbar;
