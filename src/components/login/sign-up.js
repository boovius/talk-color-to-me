import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Auth } from 'aws-amplify';
import ConfirmSignUp from './confirm-sign-up';

export default ({setSignUp}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitSignUp = () => {
    Auth.signUp({
      username,
      password,
      attributes: {
        phone_number: phone,
        email
      }
    })
    .then(res => {
      console.log('successful signup: ', res)
      setErrorMessage(null);
      setConfirming(true);
    })
    .catch(err => {
      console.log('error signing up: ', err)
      setErrorMessage(err.message);
      // reset and try again?
    })
  }

  return (
    <View>
      { confirming ?
        <ConfirmSignUp username={username} setSignUp={setSignUp} /> :
        <View style={styles.container}>
          <TextInput
            style={styles.textInputs}
            placeholder='username'
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.textInputs}
            placeholder='password'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.textInputs}
            placeholder='email'
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.textInputs}
            placeholder='phone'
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <Button onPress={submitSignUp} title="Sign Up" />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textInputs: {
    padding: 5,
    paddingLeft: 15,
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    minWidth: 75,
  },
  errorMessage: {
    color: 'red',
    width: '80%'
  }
});