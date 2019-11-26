import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/state/store";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SimpleLogin from "./src/components/simple-login";
import UsersList from "./src/components/users-list";

const AppNavigator = createStackNavigator(
  {
    SimpleLogin,
    UsersList
  },
  {
    initialRouteName: "SimpleLogin"
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
