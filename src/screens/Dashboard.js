import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {Avatar, Headline, Subheading, Title, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../css/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = (props) => {
  // const {user, loading, getDetails} = props;

  return (
    <View style={localStyles.MainContainer}>
      <ScrollView style={{marginTop: 10}}>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('PostaTaskForm', {s_id: 1})
                }>
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
                    <MaterialCommunityIcons
                      name="hanger"
                      size={28}
                      color="#FFFFFF"
                    />
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
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('PostaTaskForm', {s_id: 2})
                }>
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
                    <MaterialCommunityIcons
                      name="truck-delivery"
                      size={28}
                      color="#FFFFFF"
                    />
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
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('PostaTaskForm', {s_id: 3})
                }>
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
                    Other Jobs
                  </Text>
                </View>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('PostaTaskForm', {s_id: 4})
                }>
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
                    <MaterialCommunityIcons
                      name="washing-machine"
                      size={28}
                      color="#FFFFFF"
                    />
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
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        {/* 2 */}

        {/* 3 */}
        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginVertical: 20,
          }}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              color: '#000000',
            }}>
            Premium Customer
          </Subheading>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PostaTaskForm', {s_id: 5})
              }
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="baby-face"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <Text>Nanny</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PostaTaskForm', {s_id: 6})
              }
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons name="taxi" size={28} color="#FFFFFF" />
              </View>
              <Text>Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PostaTaskForm', {s_id: 7})
              }
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="account-child"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <Text>Child Care</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PostaTaskForm', {s_id: 8})
              }
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <Text>Chef/Butler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PostaTaskForm', {s_id: 9})
              }
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons name="cctv" size={28} color="#FFFFFF" />
              </View>
              <Text>Security</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PostaTaskForm', {s_id: 10})
              }
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#3C79CB',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="home-assistant"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <Text>Assistance</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

export default Dashboard;
