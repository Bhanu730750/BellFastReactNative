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
import {getMyBookings} from '../store/actions';
import {useIsFocused} from '@react-navigation/native';
const UpcomingBookings = (props) => {
  const {getmybookings, status, loading, mybookings} = props;

  const isFocused = useIsFocused();
  useEffect(() => {
    getmybookings();
  }, [isFocused]);

  return (
    <View style={Styles.container}>
      <View style={{marginTop: 20}}>
        <ScrollView>
          {mybookings && mybookings.length > 0 ? (
            mybookings.map((list, index) => (
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
                        marginTop: 10,
                        color: '#888888',
                      }}>
                      {list.address}
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
  getmybookings: () => dispatch(getMyBookings()),
});

const mapStateToProps = (state) => {
  console.log('on my boocccckings=====', state.bookings.mybookings);
  return {
    status: state.bookings.status,
    loading: state.bookings.loading,
    mybookings: state.bookings.mybookings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingBookings);
