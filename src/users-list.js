import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { fetchUsers } from "./state/thunks/users";

const goToRoom = () => {
  console.log('going to room');
}

const Row = ({ title }) => (
    <Text>{title}</Text>
);

const UsersList = ({ navigation, user, users }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers(user));
  // }, [users]);

  const things = [
    {id: 1, title: '1'},
    {id: 2, title: '2'},
    {id: 3, title: '3'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={things}
        renderItem={({item}) => <Row title={item.title}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = ({ user, users }) => {
  console.log('users: ', users);
  return {
    user: user.user,
    users: users.users
  };
};

export default connect(mapStateToProps)(UsersList);
