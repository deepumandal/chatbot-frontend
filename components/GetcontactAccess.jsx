import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect } from "react";

const GetcontactAccess = ({ ContactAccess, setContactAccess }) => {
  const onPressEvent = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        // PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          title: "Contacts Permission",
          message:
            "This app needs access to your contacts to be able to function properly.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Contacts permission granted");
        setContactAccess(() => !ContactAccess);
      } else {
        console.log("Contacts permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#D6D6D6",
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          width: "70%",
          height: "24%",
          borderRadius: 10,
          backgroundColor: "white",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            paddingVertical: 15,
            fontSize: 16,
            fontWeight: 800,
            marginTop: 10,
          }}
        >
          {" "}
          Contacts and media{" "}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              paddingHorizontal: 10,
              lineHeight: 20,
            }}
          >
            To easily sene messages and photos to friends and family, allow
            chatify to access your contact, photos and other media.
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            paddingHorizontal: 20,
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity onPress={onPressEvent}>
            <Text
              style={{
                color: "green",
                fontWeight: 600,
              }}
            >
              {" "}
              Not now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressEvent}>
            <Text
              style={{
                color: "green",
                fontWeight: 600,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetcontactAccess;
