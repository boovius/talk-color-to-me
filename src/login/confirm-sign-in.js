import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Auth } from 'aws-amplify';

export default ({user, navigation}) => {
  const [authCode, setAuthCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const confirmSignIn = () => {
    console.log('confirming user with user :', user);
    Auth.confirmSignIn(user, authCode)
      .then(user => {
        console.log('user received upon sign in confirmation: ', user)
        setErrorMessage(null);
        navigation.navigate('ColorWheel');
      })
      .catch(err => {
        console.log('error confirming sign in: ', err)
        setErrorMessage(err.message);
        // resend auth code
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputs}
        placeholder='sms code'
        value={authCode}
        onChangeText={text => setAuthCode(text)}
        />
      <Button onPress={confirmSignIn} title="Confirm Sign In" />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
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