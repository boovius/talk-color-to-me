import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { wsConnect } from '../state/actions/websocket';
import { authenticateUser } from '../state/actions/auth';
import { connect } from 'react-redux';

const SimpleLogin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const submitUsername = () => {
    console.log('dispatching ws connect event');
    dispatch(authenticateUser({username}));
    dispatch(wsConnect(username));
    navigation.navigate('UsersList');
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="username"
        style={styles.textInputs}
      />
      <Button onPress={submitUsername} style={styles.button} title="Enter"/>
      <Text>{errorMessage}</Text>
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
  button: {

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
})

export default connect(state => { return {} })(SimpleLogin);