import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const ProviderDashboard = (props) => {
  const {user} = props;

  return (
    <View style={localStyles.MainContainer}>
      <View style={{marginTop: 30}}>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: '#000000',
            }}>
            Customer Notifications
          </Subheading>
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
                <Icon name="bell-o" size={28} color="#FFFFFF" />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                  }}>
                  400
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 10,
                    color: '#FFFFFF',
                  }}>
                  Posted Task
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 40,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#FFFFFF',
                }}>
                Last Month Notification
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#FFFFFF',
                }}>
                12,000
              </Text>
            </View>
          </LinearGradient>
        </View>
        {/* 2 */}
        <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: '#000000',
            }}>
            City Wise Rates
          </Subheading>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#EE6494', '#F4A06D']}
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
                  backgroundColor: '#CC5B6E',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="cogs" size={28} color="#FFFFFF" />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                  }}>
                  1,000
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 10,
                    color: '#FFFFFF',
                  }}>
                  City Rates
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 40,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#FFFFFF',
                }}>
                Last Month Notification
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#FFFFFF',
                }}>
                12,000
              </Text>
            </View>
          </LinearGradient>
        </View>
        {/* 3 */}
        <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: '#000000',
            }}>
            Number Of Jobs
          </Subheading>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#B9326D', '#E5A03C']}
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
                  backgroundColor: '#962652',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="cogs" size={28} color="#FFFFFF" />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                  }}>
                  600
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 10,
                    color: '#FFFFFF',
                  }}>
                  Jobs
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 40,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#FFFFFF',
                }}>
                Last Month Notification
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#FFFFFF',
                }}>
                12,000
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // Set content's horizontal alignment.
    alignItems: 'center',
    // Set hex color code here.
    backgroundColor: '#FFFFFF',
  },
});

export default ProviderDashboard;
