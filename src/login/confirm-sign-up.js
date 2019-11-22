import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { Auth } from 'aws-amplify';

export default ({username, setSignUp}) => {
  const [authCode, setAuthCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const confirmSignUp = () => {
    Auth.confirmSignUp(username, authCode)
      .then(res => {
        console.log('successful confirmation: ', res)
        setErrorMessage(null);
        setSignUp(false);
      })
      .catch(err => {
        console.log('error confirming user: ', err)
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
      <Button onPress={confirmSignUp} title="Confirm Sign Up" />
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