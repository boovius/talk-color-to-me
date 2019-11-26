import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Button
} from "react-native";
import { fetchMyCounterparts } from "../state/thunks/users";
import Constants from 'expo-constants';

const goToRoom = () => {
  console.log("going to room");
};

const Row = ({ user }) => {
  console.log('row user: ', user);
  return (
    <TouchableOpacity style={styles.userRow} onPress={goToRoom}>
      <Text>{user.name}</Text>
    </TouchableOpacity>
  );
};

const UsersList = ({ navigation, user, users }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyCounterparts(user));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button onPress={() => navigation.navigate('MyRoom')} title="My Room"/>
      </View>
      <FlatList
        data={users.map(user => { return {key: user, name: user}})}
        renderItem={({item}) => <Row user={item} />}
        keyExtractor={user => user.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  userRow: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

const mapStateToProps = ({ authReducer, usersReducer }) => {
  console.log("users Reducer: ", usersReducer);
  return {
    user: authReducer.user.username,
    users: usersReducer.users
  };
};

export default connect(mapStateToProps)(UsersList);
