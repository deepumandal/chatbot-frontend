import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../view/ChatScreen";
import { getlateschat } from "../redux/room/room.action";

const ChatMessages = () => {
  const socketObj = useSelector((store) => store.socket);
  const store = useSelector((store) => store.auth);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("getMessage", (msg) => alert(msg));
    let id = store.userData.body._id;
    let subject = socketObj.subjectSocket;
    socket.on("getMessage", (msg) => dispatch(getlateschat(id, subject)));
  }, []);

  // useEffect(() => {
  //   // trigger  last message here
  //   socket.on("getMessage", (msg) => dispatch(getlateschat(id, subject)));
  // }, []);

  return (
    <View>
      {socketObj.currentChat?.data?.map((item, index) => {
        return (
          <Text
            key={index}
            style={{
              width: "100%",
              paddingVertical: 17,
              paddingHorizontal: 17,
              fontSize: 18,
            }}
          >
            {item.value}
          </Text>
        );
      })}
    </View>
  );
};

export default ChatMessages;
