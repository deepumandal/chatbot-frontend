import { View, Text, StyleSheet } from "react-native";
import React from "react";


const CallScreen = ({ navigation }) => {
  return (
    <View style={style.ScrollView}>
      <Text>CallScreen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  ScrollView: {
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
  },
});

export default CallScreen;
