import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CommunityIcon = () => {
  return (
    <View style={styles.icon}>
      <Icon name="people" size={25} color="white" />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: "10%",
    display: "flex",
    justifyContent : "center",
    alignItems : "center",
  },
});

export default CommunityIcon;
