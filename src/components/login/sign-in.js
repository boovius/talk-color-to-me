import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Auth } from "aws-amplify";
import ConfirmSignIn from './confirm-sign-in';

export default ({ setSignUp, navigation }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirming, setConfirming] = useState(false);

  const signIn = () => {
    Auth.signIn(username, password)
      .then(user => {
        console.log("user back from sign in: ", user);
        setUser(user);
        setErrorMessage(null);
        setConfirming(true);
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log("error signing in: ", err);
      });
  };

  return (
    <View>
      { confirming ?
        <ConfirmSignIn user={user} navigation={navigation} /> :
        <View style={styles.container}>
          <View style={styles.signUp}>
            <Button onPress={() => setSignUp(true)} title="Sign Up" />
          </View>
          <View style={styles.signIn}>
            <TextInput
              style={styles.textInputs}
              placeholder="username"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              style={styles.textInputs}
              placeholder="password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Button title="Sign In" onPress={signIn} />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-around"
  },
  singUp: {
    alignSelf: "flex-end"
  },
  signIn: {},
  textInputs: {
    padding: 5,
    paddingLeft: 15,
    borderColor: "#bbb",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    minWidth: 75
  },
  errorMessage: {
    color: 'red',
    width: '80%'
  }
});
