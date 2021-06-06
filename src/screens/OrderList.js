import React, {useEffect, useState} from 'react';

import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {getOrderList} from '../store/actions';
import {Headline, Subheading, Divider, Searchbar} from 'react-native-paper';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../components/Spinner';

import CurrencyFormatter from '../components/CurrencyFormatter';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const OrderList = (props) => {
  const {getorderlist, loading, status, orderlist} = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState('');

  useEffect(() => {
    getorderlist();
  }, []);
  return (
    <View style={Styles.container}>
      <Loader loading={loading} />
      <View style={{marginTop: 20}}>
        <ScrollView>
          {orderlist && orderlist.length > 0
            ? orderlist.map((item, key) => (
                <TouchableOpacity key={key}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '30%'}}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                          {moment(item.on_date).format('MM')}
                        </Text>
                        <Text
                          style={{
                            fontSize: 29,
                            fontFamily: 'Poppins-Regular',
                            color: '#5E43B5',
                          }}>
                          {moment(item.on_date).format('D')}
                        </Text>
                        <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                          {moment(item.on_date).format('YYYY')}
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
                    <View
                      style={{
                        ...localStyle.itemContents,
                        // flexDirection: 'row',
                        // justifyContent: 'space-between',
                        // alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                          fontWeight: 'bold',
                        }}>
                        {item.category_name} at {item.on_time}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Regular',
                          marginTop: 10,
                          color: '#888888',
                        }}>
                        {item.details}
                      </Text>
                    </View>
                  </View>

                  <Divider style={localStyle.divider} />
                </TouchableOpacity>
              ))
            : null}
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
  getorderlist: () => dispatch(getOrderList()),
});

const mapStateToProps = (state) => {
  console.log('on my orderlist', state);
  return {
    status: state.services.status,
    loading: state.services.loading,
    orderlist: state.services.orderlist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
// export default OrderList;
