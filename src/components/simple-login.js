import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { authenticateUser } from '../state/actions/auth';
import { connect } from 'react-redux';

const SimpleLogin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const storeNameAndGoToRoomsList = () => {
    dispatch(authenticateUser({username}));
    navigation.navigate('RoomsList');
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="username"
        style={styles.textInputs}
      />
      <Button onPress={storeNameAndGoToRoomsList} style={styles.button} title="Enter"/>
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