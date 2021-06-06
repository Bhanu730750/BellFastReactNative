import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Chip} from 'react-native-paper';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Rating, Image} from 'react-native-elements';
import CurrencyFormatter from '../components/CurrencyFormatter';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderList__ = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState('');

  return (
    <View style={Styles.container}>
      <View style={{marginTop: 20}}>
        <ScrollView>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              marginHorizontal: 16,
              borderColor: '#707070',
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <Image
                  PlaceholderContent={<ActivityIndicator />}
                  source={{
                    uri: 'https://picsum.photos/200/',
                  }}
                  style={{height: '100%'}}
                  resizeMode={'cover'}
                />
              </View>
              <View style={localStyle.itemContents}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: 'bold',
                      }}>
                      Lorem industry.
                    </Text>
                    <Rating
                      count={4}
                      imageSize={14}
                      type="custom"
                      ratingColor="#3498db"
                      ratingBackgroundColor="#c8c7c8"
                      style={localStyle.rating}
                    />
                  </View>
                  <Chip
                    style={{
                      backgroundColor: '#0464A4',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 30,
                    }}
                    textStyle={{color: '#fff'}}>
                    In Progress
                  </Chip>
                </View>
                <Text
                  style={{
                    color: '#6D6D6D',
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                  }}>
                  Lorem Ipsum the typesetting industry. Lorem Ipsum the
                  typesetting industry.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Icon
                    name="history"
                    type="font-awesome"
                    size={18}
                    color="#000"
                  />
                  <Text style={{marginLeft: 10, color: '#414040'}}>
                    {' '}
                    Time: 10:45 AM
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
    padding: 10,
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

export default OrderList__;
