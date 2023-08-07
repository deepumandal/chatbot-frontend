import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOtp } from "../redux/authentication/auth.action";
import { useNavigation } from "@react-navigation/native";
import Waiting from "../components/Waiting";

let otp = 1234;

const Authentication = () => {
  const [value, setValue] = useState("");
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleInputChange = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };
  const submitVaue = () => {
    if (value.length !== 10) return alert("Please enter 10 digit number");
    dispatch(GetOtp(value));
    setTimeout(() => {
      navigate.navigate("OtpVarification");
    }, 1000);
  };
  return (
    <View style={style.container}>
      <Text style={style.Title}>Enter your Phone number</Text>
      {auth.otpLoading && <Waiting name={"Loading ..."} />}

      <View style={style.inputContainer}>
        <Text style={style.contary}> India </Text>
        <View style={style.input}>
          <View style={style.code}>
            <Text
              syle={{
                fontSize: 19,
              }}
            >
              {" "}
              +{" "}
            </Text>
            <Text
              syle={{
                fontSize: 19,
              }}
            >
              {" "}
              91{" "}
            </Text>
          </View>
          <TextInput
            placeholder="phone number"
            keyboardType="numeric"
            value={value}
            maxLength={10}
            onChangeText={handleInputChange}
            style={style.inputField}
          />
        </View>
        <TouchableOpacity
          onPress={() => submitVaue()}
          style={style.button}
          activeOpacity={1}
        >
          {/* <Button title="Next" /> */}
          <Text style={style.text}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  Title: {
    width: "100%",
    paddingVertical: 15,
    marginTop: 50,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "green",
  },

  inputContainer: {
    paddingVertical: 17,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "85%",
  },
  contary: {
    paddingVertical: 10,
    width: "60%",
    textAlign: "center",
    fontSize: 17,
    fontWeight: 600,
    borderBottomWidth: 2,
    borderBottomColor: "green",
  },
  input: {
    width: "60%",
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  code: {
    width: "25%",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  inputField: {
    borderBottomColor: "green",
    borderBottomWidth: 0.3,
    width: "70%",
    paddingLeft: 5,
  },
  button: {
    width: 90,
    margin: "auto",
    position: "absolute",
    bottom: 38,
    borderRadius: 50,
  },
  text: {
    backgroundColor: "green",
    paddingVertical: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: 700,
    color: "white",
    borderRadius: 50,
  },
});

export default Authentication;
