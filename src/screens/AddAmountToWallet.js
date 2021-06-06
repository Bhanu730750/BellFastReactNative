import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PaystackWebView from 'react-native-paystack-webview';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Loader from '../components/Spinner';
import Modal from 'react-native-modal';

import {connect} from 'react-redux';
import {Icon, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../css/Styles';
import {addAmountToWallet} from '../store/actions';
import {Headline, Subheading} from 'react-native-paper';

const AddAmountToWallet = (props) => {
  const [addAmount, setAddAmount] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [txnNumber, setTxnNumber] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleFail, setModalVisibleFail] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    props.navigation.pop();
  };

  const toggleModalFailed = () => {
    setModalVisibleFail(!isModalVisibleFail);
  };

  const {user, addamounttowallet, loading, status} = props;
  useEffect(() => {
    let txn = getRandomString(12);
    setTxnNumber(txn);
  }, []);

  // useEffect(() => {
  //   if (status === 200) {
  //     props.navigation.pop();
  //   }
  // }, [status]);

  const childRef = useRef();
  const getRandomString = (length) => {
    var d = new Date();
    var n = d.getTime();
    return n;
  };

  const onAddAmountChange = (value) => {
    setAddAmount(value);
  };
  return (
    <View style={localStyle.container} behavior="padding">
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}>
        <View
          style={{
            height: 200,
            backgroundColor: '#695BF6',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Headline
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#fff',
              fontSize: 28,
            }}>
            Success!!!
          </Headline>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#fff',
              fontSize: 18,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            Your payment has credited successfully in your wallet.
          </Text>

          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              paddingVertical: 8,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#fff',
              paddingHorizontal: 20,
              backgroundColor: '#3C79CB',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#FFFFFF',
                marginLeft: 5,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        isVisible={isModalVisibleFail}
        onBackdropPress={() => toggleModalFailed()}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}>
        <View
          style={{
            height: 200,
            backgroundColor: 'red',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Headline
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#fff',
              fontSize: 28,
            }}>
            Transaction Failed!!!
          </Headline>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#fff',
              fontSize: 18,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            Your payment has failed or declined by bank.
          </Text>

          <TouchableOpacity
            onPress={() => toggleModalFailure()}
            style={{
              paddingVertical: 8,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#fff',
              paddingHorizontal: 20,
              backgroundColor: '#3C79CB',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#FFFFFF',
                marginLeft: 5,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Loader loading={loading} />
      <View style={localStyle.topBox}>
        <View style={{...localStyle.whiteBox, justifyContent: 'center'}}>
          <View>
            {errorMessage ? (
              <View style={{alignItems: 'center', top: 10, marginBottom: -20}}>
                <Text style={{color: '#FF0000'}}>{errorMessage}</Text>
              </View>
            ) : null}
            <View style={localStyle.navBar}>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#5B43B4',
                }}>
                <Text style={localStyle.navBarText}>Add Funds</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="0.00"
                containerStyle={{
                  width: '100%',
                  paddingBottom: 15,
                  color: '#FF0000',
                }}
                keyboardType="numeric"
                leftIconContainerStyle={{paddingRight: 15}}
                onChangeText={(value) => onAddAmountChange(value)}
                errorStyle={{color: '#FF0000'}}
                // errorMessage={useridError}
                value={addAmount}
                leftIcon={
                  <Icon
                    name="money"
                    type="font-awesome"
                    size={24}
                    color="#5B43B4"
                  />
                }
              />
            </View>

            <View
              style={{
                ...localStyle.navBar,
              }}>
              <PaystackWebView
                showPayButton={true}
                paystackKey="pk_test_25b10ad7ec3e180009864c6514af35c05c4c14b4"
                amount={addAmount}
                refNumber={txnNumber}
                billingEmail={user.email ? user.email : ''}
                billingMobile={user.telephone ? user.telephone : ''}
                billingName={user.fullname ? user.fullname : ''}
                ActivityIndicatorColor="blue"
                onCancel={(e) => {
                  setModalVisibleFail(!isModalVisibleFail);
                }}
                onSuccess={(e) => {
                  setModalVisible(true);
                  addamounttowallet(addAmount, txnNumber);
                }}
                ref={childRef}
              />
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#503BB0', '#9F64C8']}
                style={Styles.linearGradient}>
                <TouchableOpacity
                  onPress={() => childRef.current.StartTransaction()}>
                  <Text style={{...Styles.buttonText}}>Add Funds</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFDCF1',
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
    // marginTop: 30,
    position: 'relative',
    height: 350,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addamounttowallet: (amount, txn) => dispatch(addAmountToWallet(amount, txn)),
});

const mapStateToProps = (state) => {
  console.log('on add amoun screen', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAmountToWallet);
