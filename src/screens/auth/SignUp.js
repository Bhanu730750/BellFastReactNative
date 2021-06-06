import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../../css/Styles';
import Loader from '../../components/Spinner';
import {Headline, Subheading} from 'react-native-paper';
import {Picker} from '@react-native-community/picker';

import {connect} from 'react-redux';
import {initSignUP} from '../../store/actions/Auth';

const SignUp = (props) => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [useridError, setUseridError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [typePicker, setTypePicker] = useState('Select User Type');
  const [categoryPicker, setCategoryPicker] = useState(
    'Select Business Category',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const {loading, checkAuth, user, token, error, status, registernow} = props;

  const register = () => {
    setIsLoading(true);
    if (
      userid != '' &&
      password != '' &&
      confirmPassword != '' &&
      typePicker != ''
    ) {
      if (password !== confirmPassword) {
        setConfirmPasswordError(
          'Your password and confirm password doesnot match.',
        );
      } else {
        registernow(userid, password, typePicker, categoryPicker);

        //props.navigation.navigate('Dashboard');
      }
    } else {
      userid === '' ? setUseridError('Please enter email address') : null;
      password === '' ? setPasswordError('Please enter valid password') : null;
      confirmPassword === ''
        ? setConfirmPasswordError('Please enter confirm password')
        : null;
      typePicker === '' ? setPasswordError('Please select user type') : null;
    }
  };

  useEffect(() => {
    setIsLoading(false);
    if (status === 200) {
      props.navigation.navigate('Login');
    } else if (status === 401) {
      console.log('userdata is 401');
      setErrorMessage('Invalid user information');
    } else if (user) {
      props.navigation.navigate('Login');
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
  const onConfirmPasswordChange = (value) => {
    setConfirmPasswordError('');
    setConfirmPassword(value);
  };
  const onTypeChange = (value) => {
    setTypePicker(value);
    if (value == 3) {
      setShowPicker(true);
    } else {
      setShowPicker(false);
    }
  };

  const onCategoryChange = (value) => {
    setCategoryPicker(value);
  };

  return (
    <KeyboardAvoidingView style={localStyle.container} behavior="padding">
      <Loader loading={isLoading} />
      <View style={localStyle.topBox}>
        <View style={{alignItems: 'center'}}>
          <Headline style={localStyle.headline}>BellFast</Headline>
        </View>
        <View style={localStyle.navBar}>
          <Subheading style={localStyle.navBarText}>Sign Up</Subheading>
        </View>

        <View style={localStyle.whiteBox}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="Email Id"
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
            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="Confirm Password"
                containerStyle={{
                  width: '100%',
                  color: '#FF0000',
                }}
                leftIconContainerStyle={{paddingRight: 15}}
                onChangeText={(value) => onConfirmPasswordChange(value)}
                errorStyle={{color: '#FF0000'}}
                errorMessage={confirmPasswordError}
                value={confirmPassword}
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
            <View style={{flexDirection: 'row'}}>
              <Picker
                selectedValue={typePicker}
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 2,
                  borderBottomColor: 'red',
                }}
                errorMessage={typePicker}
                onValueChange={(itemValue, itemIndex) =>
                  onTypeChange(itemValue)
                }>
                <Picker.Item label="Select User Type" value="0" />
                <Picker.Item label="Customer" value="2" />
                <Picker.Item label="Provider" value="3" />
              </Picker>
            </View>
            {showPicker ? (
              <View style={{flexDirection: 'row'}}>
                <Picker
                  selectedValue={categoryPicker}
                  style={{
                    height: 50,
                    width: '100%',
                    borderWidth: 2,
                    borderBottomColor: 'red',
                  }}
                  errorMessage={categoryPicker}
                  onValueChange={(itemValue, itemIndex) =>
                    onCategoryChange(itemValue)
                  }>
                  <Picker.Item label="Select Business Category" value="0" />
                  <Picker.Item label="Housekeeping" value="1" />
                  <Picker.Item label="Errands" value="2" />
                  <Picker.Item label="Other Jobs" value="3" />
                  <Picker.Item label="Laundry" value="4" />
                  <Picker.Item label="Nanny" value="5" />
                  <Picker.Item label="Driver" value="6" />
                  <Picker.Item label="Child Care" value="7" />
                  <Picker.Item label="Chef" value="8" />
                  <Picker.Item label="Security" value="9" />
                  <Picker.Item label="Assistance" value="10" />
                </Picker>
              </View>
            ) : null}

            {/* <View>
              <Subheading style={localStyle.navBarText}>
                Verify Account
              </Subheading>
            </View> */}
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '48%',
                  height: 80,
                  borderWidth: 1,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="image"
                  type="font-awesome"
                  size={24}
                  color="#5B43B4"
                />
                <Text>Attach Photo</Text>
              </View>
              <View
                style={{
                  width: '48%',
                  height: 80,
                  borderWidth: 1,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="address-card"
                  type="font-awesome"
                  size={24}
                  color="#5B43B4"
                />
                <Text>Attach Photo ID</Text>
              </View>
            </View> */}
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#503BB0', '#9F64C8']}
            style={Styles.linearGradient}>
            <TouchableOpacity onPress={() => register()}>
              <Text style={Styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 100,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#82818d',
            }}>
            Already have account?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#0c0c0d',
              }}>
              Sign In
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

// export default SignUp;

const mapDispatchToProps = (dispatch) => ({
  registernow: (userid, password, typePicker, categoryPicker) =>
    dispatch(initSignUP(userid, password, typePicker, categoryPicker)),
});

const mapStateToProps = (state) => {
  console.log('here is login state', state);
  return {
    status: state.auth.status,
    error: state.auth.error,
    token: state.auth.token,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
