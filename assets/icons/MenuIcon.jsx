import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const MenuIcon = ({ color }) => {
  return (
    <View>
      <Icon
        name="dots-three-vertical"
        size={20}
        color={color ? color : "white"}
      />
    </View>
  );
};

export default MenuIcon;
