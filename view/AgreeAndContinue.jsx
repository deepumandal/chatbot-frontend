import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const AgreeAndContinue = () => {
  const navigate = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageBackground
          source={require("../assets/banner.jpg")}
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            bottom: 40,
          }}
        ></ImageBackground>
      </View>
      <Text style={style.heading}>Welcome to Chatify</Text>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={style.instruction}>Read our </Text>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Privacy policy</Text>
          </TouchableOpacity>
          <Text>. Tap "Agree and continue"</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={style.instruction}>to accept the </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "blue",
              }}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate.navigate("authentication")}
        // onPressIn={onclick}
        // onPressOut={onclick}
        activeOpacity={1}
        style={style.button}
      >
        <Text
          style={[
            style.text,
            // { opacity: isPressed ? 0.5 : 1 }
          ]}
          activeOpacity={0.5}
        >
          Agree and Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "55%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    lineHeight: 50,
    fontWeight: 600,
    color: "#111b21",
    // backgroundColor: "white",
  },
  instruction: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 400,
    color: "#3b4a54",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 50,
    width: "70%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default AgreeAndContinue;
