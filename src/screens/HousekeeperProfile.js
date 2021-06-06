import React, {useEffect} from 'react';
// import {connect} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';

const HousekeeperProfile = (props) => {
  const {user} = props;
  const url = `${URL.WEB_URL2}`;
  return (
    <View style={localStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Avatar.Image
            size={72}
            source={require('../assets/images/head-avtar.png')}
          />
          <View style={{marginLeft: 20}}>
            <Subheading
              style={{
                ...localStyles.subheadingTextName,
              }}>
              Vikash Kumar
            </Subheading>
            <Subheading
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#4e4e4e',
              }}>
              Housekeeper
            </Subheading>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="phone" size={24} color="#a795e3" />

            <Subheading
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#a795e3',
                marginLeft: 30,
              }}>
              (581)-307-6902
            </Subheading>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="envelope-o" size={24} color="#a795e3" />

            <Subheading
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#a795e3',
                marginLeft: 30,
              }}>
              info@gmail.com
            </Subheading>
          </View>
        </View>
        <Divider style={localStyles.divider} />
        <View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="home" size={28} color="#a795e3" />

            <Subheading
              style={{
                ...localStyles.subheadingText,
                marginLeft: 30,
              }}>
              Dashboard
            </Subheading>
          </TouchableOpacity>

          <Divider style={{marginVertical: 15}} />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="comments" size={28} color="#a795e3" />
            <View style={{marginLeft: 0}}>
              <Subheading
                style={{
                  ...localStyles.subheadingText,
                  marginLeft: 30,
                }}>
                Chat History
              </Subheading>
            </View>
          </TouchableOpacity>
          <Divider style={{marginVertical: 15}} />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="calendar" size={28} color="#a795e3" />
            <View style={{marginLeft: 0}}>
              <Subheading
                style={{
                  ...localStyles.subheadingText,
                  marginLeft: 30,
                }}>
                Booking
              </Subheading>
            </View>
          </TouchableOpacity>
          <Divider style={localStyles.divider} />

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="sign-out" size={28} color="#a795e3" />
            <View style={{marginLeft: 0}}>
              <Subheading
                style={{
                  ...localStyles.subheadingText,
                  marginLeft: 30,
                }}>
                <Subheading style={localStyles.subheadingText}>
                  Log Out
                </Subheading>
              </Subheading>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
  },
  linearGradient: {
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  subheadingText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    // marginLeft: 60,
    marginTop: 10,
  },
  subheadingTextName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#5e43b5',
    // marginLeft: 60,
    marginTop: 10,
  },
  divider: {
    borderWidth: 0.2,
    borderColor: '#503BB0',
    marginVertical: 20,
    width: '100%',
  },
});

export default HousekeeperProfile;
