import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Loader from "../assets/icons/Loader";

const Waiting = ({ name }) => {
  return (
    <View style={styles.loadercontainer}>
      <View style={styles.loader}>
        <View
          style={{
            height: "100%",
            width: "25%",
            paddingVertical: 20,
          }}
        >
          <Loader />
        </View>
        <Text style={styles.name}>{name} </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loadercontainer: {
    backgroundColor: "rgb(210, 210, 210)",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: "70%",
    backgroundColor: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 15,
    fontWeight: 700,
    borderRadius: 10,
    width: "70%",
    paddingVertical: 20,
  },
});

export default Waiting;
