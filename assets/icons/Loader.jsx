import * as React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Loader = () => (
  <ActivityIndicator animating={true} color={MD2Colors.black800} />
);

export default Loader;
