import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const LanguageItem = ({ setLanguage, primaryLanguage, secondaryLanguage }) => {
  return (
    <View style={style.itemBox}>
      <RadioButton value={primaryLanguage} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setLanguage(primaryLanguage)}
        style={style.textcontainer}
      >
        <Text style={style.primary}>{primaryLanguage}</Text>
        <Text style={style.secondary}>{secondaryLanguage}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  itemBox: {
    width: "100%",
    height: 70,
    marginTop: 6,
    paddingLeft: 14,
    paddingRight: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textcontainer: {
    marginLeft: 18,
    width: "100%",
    height: "100%",
    paddingTop: 15,
  },
  primary: {
    fontSize: 16,
    fontWeight: 500,
    color: "#111b21",
  },
  secondary: {
    fontSize: 16,
    fontWeight: 300,
    color: "#3b4a54",
  },
});

export default LanguageItem;
