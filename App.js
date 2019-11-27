import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/state/store";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SimpleLogin from "./src/components/simple-login";
import RoomsList from "./src/components/rooms-list";
import MyRoom from './src/components/my-room';
import Room from './src/components/room';

const AppNavigator = createStackNavigator(
  {
    SimpleLogin,
    RoomsList,
    MyRoom,
    Room
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
