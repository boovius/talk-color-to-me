import React, { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import SignIn from './sign-in';
import SignUp from './sign-up';

import Amplify from 'aws-amplify';
import config from '../config/aws-exports';
Amplify.configure(config);

export default ({navigation}) => {

  const [signUp, setSignUp] = useState(false);

  console.log('signUp: ', signUp);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      { !signUp ? <SignIn setSignUp={setSignUp} navigation={navigation} /> : <SignUp setSignUp={setSignUp} />}
    </KeyboardAvoidingView>
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
  }
});