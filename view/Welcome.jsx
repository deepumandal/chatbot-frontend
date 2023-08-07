import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Lang from "../adapters/language/language";
import LanguageItem from "../components/LanguageItem";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigate = useNavigation();
  const [language, setLanguage] = useState(Lang[0].primaryLanguage);
  console.log(`Welcome`, language);
  const handlePress = () => {
    navigate.navigate("aggreandcontinue");
  };
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={handlePress}>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
      <View style={style.imageContainer}>
        <ImageBackground
          source={require("../assets/banner.jpg")}
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            bottom: -100,
          }}
        >
          <LinearGradient
            colors={[
              "rgba(255,255,255,0.756827731092437)",
              "rgba(255,255,255,1)",
            ]}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          />
        </ImageBackground>
        <Text style={style.heading}>Welcome to Chatify</Text>
        <Text style={style.instruction}>
          Choose your language to get started
        </Text>
      </View>
      <ScrollView style={style.languageScroll}>
        <RadioButton.Group
          onValueChange={(value) => setLanguage(value)}
          value={language}
        >
          {Lang.map((item, index) => {
            return (
              <LanguageItem
                setLanguage={setLanguage}
                language={language}
                key={index}
                primaryLanguage={item.primaryLanguage}
                secondaryLanguage={item.secondaryLanguage}
              />
            );
          })}
        </RadioButton.Group>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "35%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 250,
  },

  heading: {
    fontSize: 25,
    lineHeight: 50,
    fontWeight: 600,
    color: "#111b21",
    backgroundColor: "white",
  },
  instruction: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 400,
    color: "#3b4a54",
    backgroundColor: "white",
  },
  languageScroll: {
    backgroundColor: "white",
    borderColor: "black",
    width: "100%",
    marginTop: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    zIndex: 1,
  },
});

export default Welcome;
