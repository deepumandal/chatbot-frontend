import React, { useEffect } from "react";
import { AppState, ScrollView, StyleSheet, Text } from "react-native";
import chatOptions from "../adapters/chats/chats";
import ChatBox from "../components/ChatBox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "../redux/user/user.action.js";
import { useNavigation } from "@react-navigation/native";
import { CLOSE_ROOM } from "../redux/room/room.types";
import { io } from "socket.io-client";
import url from "../ipconfig.js";

export const socket = io(url);
const ChatScreen = ({ navigation }) => {
  const store = useSelector((store) => store.user);
  const { userData } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("connection established", userData.body._id, (mysocketid) => {
      dispatch(GetAllUser(userData?.body));
    });
    socket.on("newUser", () => {
      dispatch(GetAllUser(userData?.body));
    });
  }, []);

  const navigate = useNavigation();

  useEffect(() => {
    const unsubscribe = navigate.addListener("focus", () => {
      dispatch({
        type: CLOSE_ROOM,
      });
    });

    return unsubscribe;
  }, [navigation]);

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState.match(/inactive|background/)) {
      socket.emit("disconnectMe", "");
    } else {
      setTimeout(() => {
        socket.emit(
          "reconnectMe",
          new Promise((res, rej) => {
            let _id = userData?.body?._id;
            res(_id);
          }) || ""
        );
      }, 500);
    }
  };

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  return (
    <ScrollView style={style.ScrollView}>
      {store?.data?.map((user, index) => {
        return (
          <ChatBox
            user={user}
            key={index}
            title={user.name}
            lastMessage={"lastMessage"}
            lastSeen={user.socketId === "" ? false : true}
          />
        );
      })}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  ScrollView: {
    backgroundColor: "#FFFFFF",
    minHeight: "90%",
  },
});

export default ChatScreen;
