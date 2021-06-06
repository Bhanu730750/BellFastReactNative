import React, {Component, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getProviderDashboardData} from '../store/actions';
import {View, Text, StyleSheet, Switch} from 'react-native';

import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Spinner';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProviderDashboard = (props) => {
  const {user} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const {getdashboarddata, status, dashboarddata, loading} = props;

  useEffect(() => {
    getdashboarddata();
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getdashboarddata();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);
  return (
    <View style={localStyles.MainContainer}>
      <Loader loading={loading} />
      <View style={{marginTop: 30}}>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              color: '#000000',
            }}>
            Task Notifications
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
                <MaterialCommunityIcons
                  name="calendar-check"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                  }}>
                  {dashboarddata && dashboarddata.totalrequest
                    ? dashboarddata.totalrequest
                    : '0'}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
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
                marginTop: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                Processed:{' '}
                {dashboarddata && dashboarddata.processedrequest
                  ? dashboarddata.processedrequest
                  : '0'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                Pending:{' '}
                {dashboarddata && dashboarddata.pendingrequest
                  ? dashboarddata.pendingrequest
                  : '0'}
              </Text>
            </View>
          </LinearGradient>
        </View>
        {/* 2 */}
        <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              color: '#000000',
            }}>
            My Accepted Task
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
                <MaterialCommunityIcons
                  name="format-list-checks"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                  }}>
                  {dashboarddata && dashboarddata.mytotalrequest
                    ? dashboarddata.mytotalrequest
                    : '0'}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                    color: '#FFFFFF',
                  }}>
                  Total Task
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                Processed:{' '}
                {dashboarddata && dashboarddata.myprocessedrequest
                  ? dashboarddata.myprocessedrequest
                  : '0'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                Pending:{' '}
                {dashboarddata && dashboarddata.mypendingrequest
                  ? dashboarddata.mypendingrequest
                  : '0'}
              </Text>
            </View>
          </LinearGradient>
        </View>
        {/* 3 */}
        <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
          <Subheading
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              color: '#000000',
            }}>
            Customer Messages
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
                <MaterialCommunityIcons
                  name="email"
                  size={28}
                  color="#FFFFFF"
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 26,
                    color: '#FFFFFF',
                  }}>
                  {dashboarddata && dashboarddata.mytotalmessages
                    ? dashboarddata.mytotalmessages
                    : '0'}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                    color: '#FFFFFF',
                  }}>
                  Total Messages
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                New Messages:{' '}
                {dashboarddata && dashboarddata.newmessages
                  ? dashboarddata.newmessages
                  : '0'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}></Text>
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

const mapDispatchToProps = (dispatch) => ({
  getdashboarddata: () => dispatch(getProviderDashboardData()),
});

const mapStateToProps = (state) => {
  console.log('dashboard data', state.services.dashboarddata);
  return {
    status: state.services.status,
    loading: state.posttask.loading,
    dashboarddata: state.services.dashboarddata,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderDashboard);

// export default ProviderDashboard;
