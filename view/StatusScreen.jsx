import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatusScreen = ({ navigation }) => {
  return (
    <View style={style.ScrollView}>
      <Text>Status</Text>
    </View>
  );
};

const style = StyleSheet.create({
  ScrollView: {
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
  },
});

export default StatusScreen;
