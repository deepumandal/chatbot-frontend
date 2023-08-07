import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import MenuIcon from "../assets/icons/MenuIcon";
import { useNavigation } from "@react-navigation/native";
import GetcontactAccess from "../components/GetcontactAccess";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewAccount } from "../redux/authentication/auth.action";

const OtpAndFormFilling = () => {
  const [querry, setQuerry] = useState("");
  const [otpVerifyed, setOtpVerifyed] = useState(false);
  const [ContactAccess, setContactAccess] = useState(false);

  const state = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleInputChange = (text) => {
    setQuerry(text.replace(/[^0-9]/g, ""));
  };

  const verifyOtp = () => {
    console.log(querry);
    if (querry !== "1234") return alert("Invalid OTP");
    setOtpVerifyed(true);
  };

  const [name, setName] = useState("");

  const handleTextChange = (inputText) => {
    setName(inputText);
  };

  const CreateAccount = () => {
    let body = {
      name,
      user_id: +state?.userData?.number,
      avatar_url: '',
    };
    dispatch(CreateNewAccount(body));
  };

  return (
    <View style={styles.container}>
      {otpVerifyed ? (
        <>
          <View style={styles.container}>
            {!ContactAccess && (
              <GetcontactAccess
                ContactAccess={ContactAccess}
                setContactAccess={setContactAccess}
              />
            )}

            <View
              style={{
                width: "100%",
                height: "13%",
                // borderColor: "red",
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 26,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "green",
                }}
              >
                {" "}
                Profile info{" "}
              </Text>
              <View
                style={{
                  position: "absolute",
                  right: 15,
                  top: 60,
                }}
              >
                <MenuIcon color={"black"} />
              </View>
            </View>

            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: 300,
              }}
            >
              Please Provide your name and an optional profile photo
            </Text>

            <View
              style={{
                width: 130,
                height: 130,
                borderRadius: 700,
                overflow: "hidden",
                marginTop: 40,
              }}
            >
              <Image
                source={require("../assets/avatar.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View
              style={{
                width: "80%",
                height: 50,
                marginTop: 20,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: "100%",
                  paddingLeft: 10,
                  borderBottomColor: "green",
                  borderBottomWidth: 1,
                }}
                placeholder="enter your name "
                onChangeText={handleTextChange}
                value={name}
              />
            </View>

            <TouchableOpacity
              activeOpacity={1}
              onPress={CreateAccount}
              style={{
                width: 80,
                height: 40,
                backgroundColor: "green",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.navbar}>
            <Text style={styles.headding}>Verifying your number</Text>
            <View style={styles.menuIcon}>
              <MenuIcon color={"grey"} />
            </View>
          </View>
          <Text>User will recieve otp at {"number"}</Text>
          <TextInput
            onChangeText={handleInputChange}
            style={styles.otpContainer}
            maxLength={6}
            inputMode="numeric"
          />
          <TouchableOpacity
            onPress={verifyOtp}
            activeOpacity={1}
            style={styles.button}
          >
            <Text style={styles.buttonText}> verify</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  navbar: {
    width: "100%",
    height: "8%",
    marginTop: 42,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headding: {
    width: "90%",
    textAlign: "center",
    paddingLeft: 52,
    fontSize: 22,
    color: "green",
    fontWeight: 700,
  },
  menuIcon: {
    width: "20%",
    justifyContent: "center",
  },
  otpContainer: {
    width: "40%",
    height: 40,
    borderBottomColor: "green",
    borderBottomWidth: 1,
  },
  button: {
    width: 90,
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 500,
  },
});

export default OtpAndFormFilling;
