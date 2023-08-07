import { StatusBar } from "expo-status-bar";
import { AppState, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navbar from "./components/Navbar";
import TabLists from "./components/TabLists";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen, { socket } from "./view/ChatScreen";
import StatusScreen from "./view/StatusScreen";
import CallScreen from "./view/CallScreen";
import Welcome from "./view/Welcome";
import { useSelector } from "react-redux";
import AgreeAndContinue from "./view/AgreeAndContinue";
import Authentication from "./view/Authentication";
import OtpAndFormFilling from "./view/OtpAndFormFilling";
import ChatPanel from "./view/ChatPanel";
import React, { useEffect } from "react";
function ChatTabStack() {
  const Stack = createNativeStackNavigator();
 
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
        initialRouteName="chatScreen"
      >
        <Stack.Screen name="chatScreen" component={ChatScreen} />
        <Stack.Screen name="chatpanel" component={ChatPanel} />
      </Stack.Navigator>
    </>
  );
}

const Main = () => {
  const Tab = createMaterialTopTabNavigator();
  const store = useSelector((store) => store.auth);
  const Stack = createNativeStackNavigator();
  const { isActive } = useSelector((store) => store.socket);
  const isAuthenticated = store?.userData?.isAuthenticated;

  useEffect(() => {
    return () => {
      console.log("second i am out");
    };
  }, []);

  return (
    <View style={styles.container}>
      {isAuthenticated && !isActive && <Navbar />}
      <NavigationContainer>
        {isAuthenticated && !isActive && <TabLists />}
        {!isAuthenticated ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "none",
            }}
            initialRouteName="welcomeScreen"
          >
            <Stack.Screen
              options={{ headerShown: false }}
              name="welcomeScreen"
              component={Welcome}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="aggreandcontinue"
              component={AgreeAndContinue}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="authentication"
              component={Authentication}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="OtpVarification"
              component={OtpAndFormFilling}
            />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              animation: "none",
              tabBarShowLabel: false,
              tabBarItemStyle: { display: "none" },
              tabBarStyle: { backgroundColor: "black" },
            }}
            initialRouteName={"chatTab"}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name="chatTab"
              component={ChatTabStack}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="StatusScreen"
              component={StatusScreen}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="CallScreen"
              component={CallScreen}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  Headers: {
    width: "100%",
    height: "18%",
    paddingTop: 53,
    backgroundColor: "#00a884",
    justifyContent: "space-between",
  },
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 17,
    paddingRight: 17,
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
  },
  features: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
  },
});
export default Main;

// return (
//   <Provider store={store}>
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           animation: "none",
//         }}
//         initialRouteName="chatScreen"
//       >
//         <Stack.Screen
//           options={{ headerShown: false }}
//           name="chatScreen"
//           component={ChatScreen}
//         />
//         <Stack.Screen
//           options={{ headerShown: false }}
//           name="StatusScreen"
//           component={StatusScreen}
//         />
//         <Stack.Screen
//           options={{ headerShown: false }}
//           name="CallScreen"
//           component={CallScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </Provider>
// );
