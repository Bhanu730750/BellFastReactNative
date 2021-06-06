import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Subheading, Divider, Avatar} from 'react-native-paper';
// import {connect} from 'react-redux';
// import {initLogin} from '../../store/actions/Auth';

const Welcome = (props) => {
  return (
    <KeyboardAvoidingView style={localStyle.container} behavior="padding">
      <View style={localStyle.topBox}>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Subheading>SignUp</Subheading>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Subheading>Login</Subheading>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Subheading>Customer Profile</Subheading>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Dashboard')}>
          <Subheading>Dashboard</Subheading>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HousekeeperProfile')}>
          <Subheading>Housekeeper Profile</Subheading>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PostaTask')}>
          <Subheading>Post a task</Subheading>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('UpcomingBookings')}>
          <Subheading>Upcoming Bookings</Subheading>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('OngoiningBookings')}>
          <Subheading>Ongoiing Bookings</Subheading>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('TaskList')}>
          <Subheading>Task List</Subheading>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('OrderList')}>
          <Subheading>Order History</Subheading>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  topBox: {
    marginTop: 30,
    height: '75%',
    width: '80%',
  },
  headline: {
    color: '#5B43B4',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    textAlign: 'center',
  },
  subheading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  whiteBox: {
    marginTop: 30,
    position: 'relative',
    height: 350,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
    marginHorizontal: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default Welcome;
