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
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import CurrencyFormatter from '../components/CurrencyFormatter';
import Icon from 'react-native-vector-icons/FontAwesome';
// import moment from 'moment';

const UpcomingBookings = (props) => {
  const {getnewpawnslist, newpawnlist, wallet} = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState('');

  return (
    <View style={Styles.container}>
      <View style={{marginTop: 20}}>
        <ScrollView>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{width: '30%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    Saturday
                  </Text>
                  <Text
                    style={{
                      fontSize: 29,
                      fontFamily: 'Poppins-Regular',
                      color: '#5E43B5',
                    }}>
                    24
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Poppins'}}>
                    September
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 10,
                    color: '#888888',
                  }}>
                  Lorem Ipsum the typesetting industry.
                </Text>
              </View>
            </View>
            <Divider style={localStyle.divider} />
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
    marginVertical: 10,
  },
  linearGradient: {
    marginVertical: 20,
    borderRadius: 20,
  },
});

export default UpcomingBookings;
