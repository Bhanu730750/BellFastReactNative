import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../../css/Styles';
import Loader from '../../components/Spinner';
import {Headline, Subheading} from 'react-native-paper';

import {connect} from 'react-redux';
import {initChangePassword} from '../../store/actions/Auth';

const ResetPassword = (props) => {
  const [userid, setUserid] = useState('');
  const [useridError, setUseridError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {loading, status, changepassword, message} = props;

  const resetpassword = () => {
    if (userid != '') {
      changepassword(userid);
    } else {
      setUseridError('Please enter valid email address');
    }
  };

  useEffect(() => {
    if (status === 200) {
      setErrorMessage(message);
    } else if (status === 401) {
      setErrorMessage(message);
    }
  }, [status]);

  const onUserIdChange = (value) => {
    // console.log(value);
    setUseridError('');
    setUserid(value);
  };

  return (
    <KeyboardAvoidingView style={localStyle.container} behavior="padding">
      <Loader loading={loading} />
      <View style={localStyle.topBox}>
        <View style={{alignItems: 'center'}}>
          <Headline style={localStyle.headline}>BellFast</Headline>
        </View>
        <View style={localStyle.navBar}>
          <Subheading style={localStyle.navBarText}>Reset Password</Subheading>
        </View>
        <View style={localStyle.whiteBox}>
          <View>
            {errorMessage ? (
              <View style={{alignItems: 'center', top: 10, marginBottom: -20}}>
                <Text style={{color: '#FF0000'}}>{errorMessage}</Text>
              </View>
            ) : null}
            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="Enter registered email id"
                containerStyle={{
                  width: '100%',
                  paddingBottom: 15,
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
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#503BB0', '#9F64C8']}
            style={{...Styles.linearGradient, width: '75%', marginTop: 125}}>
            <TouchableOpacity onPress={() => resetpassword()}>
              <Text style={Styles.buttonText}>Update Password</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#82818d',
            }}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#0c0c0d',
              }}>
              Login Now
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
    height: 150,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
    marginHorizontal: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

const mapDispatchToProps = (dispatch) => ({
  changepassword: (email) => dispatch(initChangePassword(email)),
  // checkAuth: () => dispatch(initAuthStatus()),
});

const mapStateToProps = (state) => {
  console.log('here is login state', state);
  return {
    status: state.auth.status,
    message: state.auth.message,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
