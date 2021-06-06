import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  Headline,
  Subheading,
  Divider,
  Searchbar,
  Avatar,
} from 'react-native-paper';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Rating} from 'react-native-elements';
import CurrencyFormatter from '../components/CurrencyFormatter';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskList = (props) => {
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
              padding: 10,
              borderColor: '#707070',
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Avatar.Image
                    PlaceholderContent={<ActivityIndicator />}
                    source={{
                      uri: 'https://picsum.photos/200/300',
                    }}
                    resizeMode={'contain'}
                  />
                </View>
              </View>

              <View style={localStyle.itemContents}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'bold',
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14}}>Lorem Ipsum is simply</Text>
              <Text style={{fontSize: 14, color: '#616161'}}>0.4 Km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Rating count={4} imageSize={20} style={localStyle.rating} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color: '#616161', marginRight: 10}}>
                  N200 Per
                </Text>
                <Icon
                  name="comment-o"
                  type="font-awesome"
                  size={24}
                  color="#5B43B4"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              marginHorizontal: 16,
              padding: 10,
              borderColor: '#707070',
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Avatar.Image
                    PlaceholderContent={<ActivityIndicator />}
                    source={{
                      uri: 'https://picsum.photos/200/300',
                    }}
                    resizeMode={'contain'}
                  />
                </View>
              </View>

              <View style={localStyle.itemContents}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'bold',
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14}}>Lorem Ipsum is simply</Text>
              <Text style={{fontSize: 14, color: '#616161'}}>0.4 Km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Rating count={4} imageSize={20} style={localStyle.rating} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color: '#616161', marginRight: 10}}>
                  N200 Per
                </Text>
                <Icon
                  name="comment-o"
                  type="font-awesome"
                  size={24}
                  color="#5B43B4"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              marginHorizontal: 16,
              padding: 10,
              borderColor: '#707070',
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Avatar.Image
                    PlaceholderContent={<ActivityIndicator />}
                    source={{
                      uri: 'https://picsum.photos/200/300',
                    }}
                    resizeMode={'contain'}
                  />
                </View>
              </View>

              <View style={localStyle.itemContents}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'bold',
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14}}>Lorem Ipsum is simply</Text>
              <Text style={{fontSize: 14, color: '#616161'}}>0.4 Km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Rating count={4} imageSize={20} style={localStyle.rating} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color: '#616161', marginRight: 10}}>
                  N200 Per
                </Text>
                <Icon
                  name="comment-o"
                  type="font-awesome"
                  size={24}
                  color="#5B43B4"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              marginHorizontal: 16,
              padding: 10,
              borderColor: '#707070',
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Avatar.Image
                    PlaceholderContent={<ActivityIndicator />}
                    source={{
                      uri: 'https://picsum.photos/200/300',
                    }}
                    resizeMode={'contain'}
                  />
                </View>
              </View>

              <View style={localStyle.itemContents}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'bold',
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14}}>Lorem Ipsum is simply</Text>
              <Text style={{fontSize: 14, color: '#616161'}}>0.4 Km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Rating count={4} imageSize={20} style={localStyle.rating} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color: '#616161', marginRight: 10}}>
                  N200 Per
                </Text>
                <Icon
                  name="comment-o"
                  type="font-awesome"
                  size={24}
                  color="#5B43B4"
                />
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

export default TaskList;
