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
import { setRoom } from "../state/actions/room";
import Constants from 'expo-constants';

const Row = ({ user, navigation, goToRoom }) => {
  console.log('row user: ', user);
  return (
    <TouchableOpacity style={styles.userRow} onPress={() => goToRoom(user)}>
      <Text>{user.name}</Text>
    </TouchableOpacity>
  );
};

const UsersList = ({ navigation, user, users }) => {
  const dispatch = useDispatch();

  const goToRoom = (user) => {
    dispatch(setRoom(user.name));
    navigation.navigate('Room', {room: user.name})
  };

  useEffect(() => {
    dispatch(fetchMyCounterparts(user));
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button onPress={() => navigation.navigate('MyRoom')} title="My Room"/>
      </View>
      <FlatList
        data={users.map(user => { return {key: user, name: user}})}
        renderItem={({item}) => <Row navigation={navigation} user={item} goToRoom={goToRoom}/>}
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
