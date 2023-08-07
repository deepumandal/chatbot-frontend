import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import BackArrow from "../assets/icons/BackArrow";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import ChatMessages from "../components/ChatMessages";
import { socket } from "./ChatScreen";
import { useDispatch, useSelector } from "react-redux";
import { getlateschat } from "../redux/room/room.action";

const ChatPanel = ({ route }) => {
  const navigation = useNavigation();
  const subject = route.params;
  const store = useSelector((store) => store.auth);

  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const [send, setSend] = useState(true);

  const socketObj = useSelector((store) => store.socket);

  const handleSendMessage = () => {
    socket.emit(
      "sendMessage",
      subject._id,
      new Promise((res) => res(store?.userData?.body)),
      inputText
    );
    setSend((prev) => !prev);
    alert("send");
  };

  useEffect(() => {
    socket.on("getMessage", () => {
      let id = store.userData.body._id;
      let subject = socketObj.subjectSocket;
      console.log();
      dispatch(getlateschat(id, subject));
    });
  }, [handleSendMessage]);

  return (
    <View
      style={{
        backgroundColor: "#f7edd0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 100,
          borderColor: "red",
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "flex-end",
          paddingVertical: 17,
          justifyContent: "flex-start",
          backgroundColor: "#00a884",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 17,
            color: "white",
          }}
        >
          {subject.name}
        </Text>
      </View>
      <View
        style={{
          borderColor: "red",
          borderWidth: 1,
          width: "100%",
          height: "80%",
        }}
      >
        <ChatMessages />
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message here"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: "white",
    underlineColorAndroid: "transparent",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#ff5c5c",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatPanel;
