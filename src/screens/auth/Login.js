import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../../css/Styles';
import Loader from '../../components/Spinner';
import {Headline, Subheading} from 'react-native-paper';

import {connect} from 'react-redux';
import {initLogin} from '../../store/actions/Auth';

const Login = (props) => {
  const [userid, setUserid] = useState('priti@gmail.com');
  const [password, setPassword] = useState('12');
  const [useridError, setUseridError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {loading, checkAuth, user, token, error, status, authenticate} = props;

  const login = () => {
    if (userid != '' && password != '') {
      authenticate(userid, password);
    } else {
      setUseridError('Please enter valid email address');
      setPasswordError('Please enter password');
    }
  };

  useEffect(() => {
    console.log('statusstatus', status);
    if (status === 200) {
      props.navigation.navigate('Landing');
    } else if (status === 401) {
      console.log('userdata is 401');
      setErrorMessage('Invalid user information');
    }
  }, [user, status]);

  const onUserIdChange = (value) => {
    // console.log(value);
    setUseridError('');
    setUserid(value);
  };

  const onPasswordChange = (value) => {
    setPasswordError('');
    setPassword(value);
  };

  return (
    <KeyboardAvoidingView style={localStyle.container} behavior="padding">
      <Loader loading={loading} />
      <View style={localStyle.topBox}>
        <View style={{alignItems: 'center'}}>
          <Headline style={localStyle.headline}>BellFast</Headline>
        </View>
        <View style={localStyle.navBar}>
          <Subheading style={localStyle.navBarText}>Sign In</Subheading>
          {errorMessage ? (
            <View style={{alignItems: 'center', top: 10, marginBottom: -20}}>
              <Text style={{color: '#FF0000'}}>{errorMessage}</Text>
            </View>
          ) : null}
        </View>

        <View style={localStyle.whiteBox}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="User Name"
                containerStyle={{
                  width: '100%',
                  color: '#FF0000',
                }}
                leftIconContainerStyle={{paddingRight: 15}}
                onChangeText={(value) => onUserIdChange(value)}
                errorStyle={{color: '#FF0000'}}
                errorMessage={useridError}
                value={userid}
                leftIcon={
                  <Icon
                    name="envelope-o"
                    type="font-awesome"
                    size={24}
                    color="#5B43B4"
                  />
                }
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="Password"
                containerStyle={{
                  width: '100%',
                  color: '#FF0000',
                }}
                leftIconContainerStyle={{paddingRight: 15}}
                onChangeText={(value) => onPasswordChange(value)}
                errorStyle={{color: '#FF0000'}}
                errorMessage={passwordError}
                value={password}
                secureTextEntry={true}
                leftIcon={
                  <Icon
                    name="lock"
                    type="font-awesome"
                    size={24}
                    color="#5B43B4"
                  />
                }
              />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ResetPassword')}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#513db2',
                  textAlign: 'right',
                  marginRight: 20,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#503BB0', '#9F64C8']}
          style={Styles.linearGradient}>
          {/* <TouchableOpacity onPress={() => login()}> */}
          <TouchableOpacity onPress={() => login()}>
            <Text style={Styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#82818d',
            }}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#0c0c0d',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
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
    height: '75%',
    width: '80%',
  },
  headline: {
    color: '#5e43b5',
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
    position: 'relative',
    height: 350,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
  navBar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (email, password) => dispatch(initLogin(email, password)),
  getDetails: () => dispatch(getUserDetail()),
  // checkAuth: () => dispatch(initAuthStatus()),
});

const mapStateToProps = (state) => {
  console.log('here is login state', state);
  return {
    status: state.auth.status,
    token: state.auth.token,
    loading: state.auth.loading,
    // user: state.auth.user,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
