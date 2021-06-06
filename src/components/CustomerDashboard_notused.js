import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const CustomerDashboard = (props) => {
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
            Basic Customer
          </Subheading>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#4D93F7', '#51BDF7']}
              style={{
                width: '48%',
                height: 140,
                borderRadius: 12,
                marginTop: 10,
                padding: 20,
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                    color: '#FFFFFF',
                    marginTop: 10,
                  }}>
                  Housekeeping
                </Text>
              </View>
            </LinearGradient>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#EE6494', '#F4A06D']}
              style={{
                width: '48%',
                height: 140,
                borderRadius: 12,
                marginTop: 10,
                padding: 20,
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#CC5B6E',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="user" size={28} color="#FFFFFF" />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                    color: '#FFFFFF',
                    marginTop: 10,
                  }}>
                  Errands
                </Text>
              </View>
            </LinearGradient>
          </View>
          {/* row two */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#4D93F7', '#51BDF7']}
              style={{
                width: '48%',
                height: 140,
                borderRadius: 12,
                marginTop: 10,
                padding: 20,
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#962652',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="briefcase" size={28} color="#FFFFFF" />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                    color: '#FFFFFF',
                    marginTop: 10,
                  }}>
                  Odd Jobs
                </Text>
              </View>
            </LinearGradient>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#EE6494', '#F4A06D']}
              style={{
                width: '48%',
                height: 140,
                borderRadius: 12,
                marginTop: 10,
                padding: 20,
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                    color: '#FFFFFF',
                    marginTop: 10,
                  }}>
                  Loundry
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        {/* 2 */}

        {/* 3 */}
        <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: '#000000',
            }}>
            Premium Customer
          </Subheading>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="child" size={28} color="#FFFFFF" />
              </View>
              <Text>Nanny</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="car" size={28} color="#FFFFFF" />
              </View>
              <Text>Driver</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="child" size={28} color="#FFFFFF" />
              </View>
              <Text>Child Care</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="pizza-slice" size={28} color="#FFFFFF" />
              </View>
              <Text>Chef/Butler</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="child" size={28} color="#FFFFFF" />
              </View>
              <Text>Security</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="child" size={28} color="#FFFFFF" />
              </View>
              <Text>Assistance</Text>
            </View>
          </View>
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

export default CustomerDashboard;
