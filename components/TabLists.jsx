import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tabs from "../adapters/tabs/tabs.js";
import CommunityIcon from "../assets/icons/CommunityIcon.jsx";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const TabLists = () => {
  const store = useSelector((store) => store);
  const navigate = useNavigation();
  return (
    <View style={TabStyle.TabContainer}>
      <CommunityIcon />
      {tabs.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => navigate.navigate(item.chatRoute)}
            key={item.id}
            style={TabStyle.Tab}
          >
            <Text style={TabStyle.areaName}> {item.areaName} </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabStyle = StyleSheet.create({
  TabContainer: {
    width: "100%",
    height: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00a884",
  },
  Tab: {
    width: "27%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  areaName: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  },
});

export default TabLists;
