import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator, Text, StyleSheet, Image} from 'react-native';
import {Subheading, Avatar} from 'react-native-paper';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getWalletBalance, getAllTransactions} from '../store/actions';
import CurrencyFormatter from '../components/CurrencyFormatter';
import Loader from '../components/Spinner';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
const Payment = (props) => {
  const creditImg = require('../assets/images/wallet.png');
  const debitImg = require('../assets/images/cash-payment.png');
  const {
    wallet,
    getwalletbalance,
    getalltransactions,
    loading,
    txnlist,
  } = props;
  const isFocused = useIsFocused();
  useEffect(() => {
    getwalletbalance();
    getalltransactions();
  }, [isFocused]);

  const reloadWallet = () => {
    getwalletbalance();
    getalltransactions();
  };

  return (
    <View style={Styles.container}>
      <Loader loading={loading} />
      <View style={{marginTop: 10}}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#4D93F7', '#51BDF7']}
            style={{
              width: 320,
              height: 140,
              borderRadius: 12,
              marginTop: 10,
              padding: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="money" size={28} color="#FFFFFF" />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                    marginRight: 10,
                  }}>
                  {wallet && wallet.amount !== null ? wallet.amount : '0.00'}
                </Text>
                <Icon
                  name="refresh"
                  size={26}
                  color="#FFFFFF"
                  onPress={() => getwalletbalance()}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 40,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#fff',
                  paddingHorizontal: 20,
                  backgroundColor: '#3C79CB',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('AddAmountToWallet')}>
                <Icon name="plus-circle" size={22} color="#FFFFFF" />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#FFFFFF',
                    marginLeft: 5,
                  }}>
                  Add Fund
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <ScrollView>
          <Loader loading={loading} />

          {txnlist && txnlist.length > 0 ? (
            txnlist.map((list, index) => (
              <TouchableOpacity
                style={{
                  borderWidth: 0.5,
                  marginVertical: 5,
                  marginHorizontal: 16,
                  padding: 10,
                  borderColor: '#707070',
                  borderRadius: 8,
                }}
                key={index}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: '20%'}}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        PlaceholderContent={<ActivityIndicator />}
                        source={list.credit_amt == 0 ? debitImg : creditImg}
                        resizeMode={'contain'}
                      />
                    </View>
                  </View>
                  <View style={{...localStyle.itemContents}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Subheading
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontWeight: 'bold',
                        }}>
                        {list.ttype}
                      </Subheading>
                      <Subheading
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontWeight: 'bold',
                          color: list.credit_amt == 0 ? 'red' : 'green',
                        }}>
                        {list.credit_amt == 0 ? '-' : '+'}
                        {list.credit_amt == 0
                          ? list.debit_amt
                          : list.credit_amt}
                      </Subheading>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {list.TranDescription}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {moment(list.receive_date).format('Do MMMM YYYY')}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>No transactions found..</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  headline: {
    fontFamily: 'Poppins-Medius',
    fontSize: 16,
    justifyContent: 'flex-start',
  },
  subheading: {
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },

  itemContents: {
    width: '75%',
    marginLeft: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#d2d2d2',
    marginVertical: 12,
    marginHorizontal: 10,
  },
  linearGradient: {
    marginVertical: 20,
    borderRadius: 20,
  },
  rating: {
    marginTop: 8,
    alignItems: 'flex-start',
  },
});

const mapDispatchToProps = (dispatch) => ({
  getwalletbalance: () => dispatch(getWalletBalance()),
  getalltransactions: () => dispatch(getAllTransactions()),
});

const mapStateToProps = (state) => {
  console.log('on wallet screen======', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    wallet: state.wallet.wallet,
    txnlist: state.wallet.txnlist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
