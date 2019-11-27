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
import { fetchRooms } from "../state/thunks/rooms";
import { setRoom } from "../state/actions/room";
import { exitRoom } from "../state/thunks/room";
import Constants from 'expo-constants';

const Row = ({ room, pressRow }) => {
  console.log('row room: ', room);
  return (
    <TouchableOpacity style={styles.roomRow} onPress={() => pressRow(room)}>
      <Text>{room.owner.name}</Text>
    </TouchableOpacity>
  );
};

const RoomsList = ({ navigation, user, rooms, room }) => {
  const dispatch = useDispatch();

  const goToRoom = (user) => {
    dispatch(setRoom(user.name));
    navigation.navigate('Room', {room: user.name})
  };

  useEffect(() => {
    if (room) {
      dispatch(exitRoom(room, false));
    }
    dispatch(fetchRooms());
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button onPress={() => navigation.navigate('Room')} title="My Room"/>
      </View>
      <FlatList
        data={Object.values(rooms)}
        renderItem={({item}) => <Row navigation={navigation} room={item} pressRow={goToRoom}/>}
        keyExtractor={room => room.owner.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  roomRow: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

const mapStateToProps = ({ authReducer, roomReducer, roomsReducer }) => {
  console.log("rooms Reducer: ", roomsReducer);
  console.log("room Reducer: ", roomReducer);
  console.log("auth Reducer: ", authReducer);
  return {
    user: authReducer.user.username,
    rooms: roomsReducer.rooms,
    roomname: roomReducer.roomname
  };
};

export default connect(mapStateToProps)(RoomsList);
