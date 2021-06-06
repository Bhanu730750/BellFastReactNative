import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Headline, Subheading, Divider, Searchbar} from 'react-native-paper';
import Styles from '../css/Styles';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import CurrencyFormatter from '../components/CurrencyFormatter';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {getUpcomingBookings} from '../store/actions';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../components/Spinner';
const OngoiningBookings = (props) => {
  const {getupcomingbookings, status, loading, bookinglist} = props;

  const isFocused = useIsFocused();
  useEffect(() => {
    getupcomingbookings();
  }, [isFocused]);

  const reloadWallet = () => {
    getupcomingbookings();
  };

  return (
    <View style={Styles.container}>
      <Loader loading={loading} />
      <View style={{marginTop: 20, marginBottom: 30}}>
        <ScrollView style={{}}>
          {bookinglist && bookinglist.length > 0 ? (
            bookinglist.map((list, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  props.navigation.navigate('TaskDetails', {id: list.id})
                }>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '30%'}}>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                        {moment(list.on_date).format('dddd')}
                      </Text>
                      <Text
                        style={{
                          fontSize: 29,
                          fontFamily: 'Poppins-Regular',
                          color: '#5E43B5',
                        }}>
                        {moment(list.on_date).format('D')}
                      </Text>
                      <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                        {moment(list.on_date).format('MMMM')}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 80,
                      width: 2,
                      backgroundColor: '#D81458',
                    }}
                  />

                  <View style={localStyle.itemContents}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                          fontWeight: 'bold',
                        }}>
                        {list.category_name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                          fontWeight: 'bold',
                        }}>
                        {list.on_time}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                          marginTop: 10,
                          color: '#888888',
                        }}>
                        {list.address}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                          fontWeight: 'bold',
                        }}>
                        {list.duration} Hr(s)
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: 'bold',
                        color: list && list.status == 1 ? 'red' : 'green',
                      }}>
                      {list && list.status == 1 ? 'Processed' : 'Pending'}
                    </Text>
                  </View>
                </View>
                <Divider style={localStyle.divider} />
              </TouchableOpacity>
            ))
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>No booking found..</Text>
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
    width: '65%',
    marginLeft: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#d2d2d2',
    marginVertical: 10,
  },
  linearGradient: {
    marginVertical: 20,
    borderRadius: 20,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getupcomingbookings: () => dispatch(getUpcomingBookings()),
});

const mapStateToProps = (state) => {
  console.log('on upcoming bookings=====', state);
  return {
    status: state.bookings.status,
    loading: state.bookings.loading,
    bookinglist: state.bookings.upcomingbookings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OngoiningBookings);
