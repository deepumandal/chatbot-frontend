import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import img from "../assets/avatar.png";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { activeRoom } from "../redux/room/room.action";
const ChatBox = ({ title, lastMessage, isActive, user }) => {
  const navigate = useNavigation();
  const [press, setPress] = useState(false);
  const dispatch = useDispatch();
  const pressMyevent = () => {
    setPress((press) => !press);
  };

  return (
    <TouchableOpacity
      onPressIn={pressMyevent}
      onPressOut={pressMyevent}
      onPress={() => {
        navigate.navigate("chatpanel", user);
        dispatch(activeRoom(user));
      }}
      style={[style.Container, press ? style.pressContainer : null]}
    >
      <View style={style.avatarBox}>
        <Image source={img} style={style.avatar} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.header}>{title}</Text>
        <Text style={style.lastmessage}>{lastMessage}</Text>
      </View>
      <Text style={style.lastSeen}>{
isActive ? "online" : "offline"
      }</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  lastSeen: {
    position: "absolute",
    top: 10,
    right: 13,
    fontSize: 12,
    fontWeight: 600,
    color: "#8696a0",
  },
  pressContainer: {
    backgroundColor: "#D6D5D4",
  },
  Container: {
    width: "100%",
    height: 80,
    paddingLeft: 6,
    paddingRight: 6,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 4,
  },
  avatarBox: {
    borderRadius: 50,
    overflow: "hidden",
    width: "16%",
    marginRight: 16,
    marginLeft: 12,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  textContainer: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "70%",
    height: 48,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111b21",
  },
  lastmessage: {
    fontSize: 15,
    fontWeight: 400,
    color: "#3b4a54",
  },
});

export default ChatBox;
