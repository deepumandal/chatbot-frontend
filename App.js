import { Provider } from "react-redux";
import Main from "./main";
import store from "./redux/redux";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
