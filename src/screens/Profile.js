import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  ActivityIndicator,
} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';
import Loader from '../components/Spinner';
import {connect} from 'react-redux';
// import {setDuty} from '../store/actions/Profile';
import {useIsFocused} from '@react-navigation/native';
import {getMyProfileDetails, setDuty} from '../store/actions';

const Profile = (props) => {
  const url = `${URL.WEB_URL2}`;
  const {user, status, loading, getProfileDetails, setmyduty} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setmyduty();
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getProfileDetails();
    // console.log(URL.WEB_URL2);
  }, [isFocused]);

  // useEffect(() => {
  //   setIsEnabled(user.duty);
  // }, [user]);
  return (
    <View style={localStyles.container}>
      <Loader loading={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          {user && user.image !== null ? (
            <Avatar.Image
              size={72}
              style={{backgroundColor: 'transparent'}}
              source={{
                uri: `${URL.WEB_URL2}` + `kycdocuments/` + `${user.image}`,
              }}
              PlaceholderContent={
                <ActivityIndicator size="large" color="#5e43b5" />
              }
            />
          ) : (
            <Avatar.Image
              size={72}
              style={{backgroundColor: 'transparent'}}
              source={require('../assets/images/head-avtar.png')}
            />
          )}

          <View style={{marginLeft: 20}}>
            <Subheading
              style={{
                ...localStyles.subheadingTextName,
              }}>
              {user && user.fullname !== null
                ? user.fullname
                : 'Profile Not Updated'}
            </Subheading>
            <Subheading
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#4e4e4e',
              }}>
              {user && user.role_id === 2 ? 'Customer' : 'Provider'}
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
              {user && user.telephone !== null ? user.telephone : 'Add Contact'}
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
              {user && user.email !== null ? user.email : ''}
            </Subheading>
          </View>
        </View>
        <Divider style={localStyles.divider} />
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}
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
            onPress={() => props.navigation.navigate('ProfileUpdate')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user" size={28} color="#a795e3" />

            <Subheading
              style={{
                ...localStyles.subheadingText,
                marginLeft: 37,
              }}>
              Profile
            </Subheading>
          </TouchableOpacity>
          {user && user.role_id === 2 ? (
            <>
              <Divider style={{marginVertical: 15}} />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MyTask')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="briefcase" size={28} color="#a795e3" />

                <Subheading
                  style={{
                    ...localStyles.subheadingText,
                    marginLeft: 30,
                  }}>
                  My Booking
                </Subheading>
              </TouchableOpacity>
            </>
          ) : null}
          <Divider style={{marginVertical: 15}} />
          {user && user.role_id !== 2 ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="globe" size={28} color="#a795e3" />

                <Subheading
                  style={{
                    ...localStyles.subheadingText,
                    marginLeft: 30,
                  }}>
                  My Duty
                </Subheading>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{marginLeft: 180}}
                />
              </View>
              <Divider style={{marginVertical: 15}} />

              <TouchableOpacity
                onPress={() => props.navigation.navigate('UpcomingBookings')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="list" size={28} color="#a795e3" />

                <Subheading
                  style={{
                    ...localStyles.subheadingText,
                    marginLeft: 30,
                  }}>
                  Upcoming Bookings
                </Subheading>
              </TouchableOpacity>
              <Divider style={{marginVertical: 15}} />

              <TouchableOpacity
                onPress={() => props.navigation.navigate('OngoiningBookings')}
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
              <Divider style={{marginVertical: 15}} />
            </>
          ) : null}
          {user && user.role_id === 2 ? (
            <>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('OrderList')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="list" size={28} color="#a795e3" />

                <Subheading
                  style={{
                    ...localStyles.subheadingText,
                    marginLeft: 30,
                  }}>
                  Order History
                </Subheading>
              </TouchableOpacity>
              <Divider style={{marginVertical: 15}} />
            </>
          ) : null}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Payment')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="money" size={28} color="#a795e3" />

            <Subheading
              style={{
                ...localStyles.subheadingText,
                marginLeft: 30,
              }}>
              Payment
            </Subheading>
          </TouchableOpacity>
          {/* <Divider style={{marginVertical: 15}} />
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
          </TouchableOpacity> */}

          <Divider style={localStyles.divider} />

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Logout');
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="power-off" size={28} color="#a795e3" />
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

const mapDispatchToProps = (dispatch) => ({
  getProfileDetails: () => dispatch(getMyProfileDetails()),
  setmyduty: () => dispatch(setDuty()),
});
const mapStateToProps = (state) => {
  console.log('on my customer profile', state);
  return {
    status: state.profile.status,
    error: state.profile.error,
    loading: state.profile.loading,
    user: state.profile.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
