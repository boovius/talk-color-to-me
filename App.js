import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/state/store";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/login";
import ColorWheel from "./src/color-wheels";

const AppNavigator = createStackNavigator(
  {
    Login,
    ColorWheel
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={configureStore()}>
      <AppContainer />
    </Provider>
  );
}
