import React, { useState, useEffect } from "react";
import { useDispatch, connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { wsConnect, sendData } from '../state/actions/websocket';

const Room = ({messages, username, roomname}) => {
  const dispatch = useDispatch();
  const [yourText, setYourText] = useState('');

  const sendYourText = (text) => {
    setYourText(text);
    dispatch(sendData(roomname, text));
  }

  useEffect(() => {
    console.log('username when connecting in component: ', username);
    console.log('roomname when connecting in component: ', roomname);
    dispatch(wsConnect(username, roomname));
  });

  return (
    <View id="chat-room" style={styles.container}>
      <Text>You are in {roomname}'s room</Text>
      {messages}
      <View>
        <Text>your text</Text>
        <TextInput
          value={yourText}
          onChangeText={text => sendYourText(text)}
          placeholder="Your Text here..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  spacer: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    borderStyle: 'solid',
    height: 1,
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    marginBottom: 20,
    minWidth: 70
  },
  inputContainer__text: {
    marginRight: 20
  },
  colorInput: {
    height: 40,
    color: "blue",
    minWidth: 70
  },
  colorWheel: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#cfcfcf"
  },
  validationError: {
    color: "red"
  }
});

const mapStateToProps = state => {
  return {
    username: state.authReducer.user.username,
    messages: state.roomReducer.messages,
    roomname: state.roomReducer.room || state.authReducer.user.username,
  }
}

export default connect(mapStateToProps)(Room);
