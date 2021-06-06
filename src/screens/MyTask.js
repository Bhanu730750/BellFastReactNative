import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getMyLatestTask} from '../store/actions';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';
import moment from 'moment';
import Loader from '../components/Spinner';
import {useIsFocused} from '@react-navigation/native';

const MyTask = (props) => {
  // console.log(props);
  const url = `${URL.WEB_URL2}`;
  const {getMytask, status, mylatest_task, loading} = props;
  // const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    getMytask();
  }, [isFocused]);

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     getMytask();
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [props.navigation]);

  return (
    <View style={localStyles.container}>
      <Loader loading={loading} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Subheading
          style={{
            marginBottom: 20,
            marginHorizontal: 20,
            marginTop: 30,
            fontFamily: 'Poppins-Bold',
          }}>
          Booking Details
        </Subheading>
        <View style={{marginBottom: 20, marginHorizontal: 20, marginTop: 30}}>
          <View
            style={{
              backgroundColor: 'red',
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 15,
            }}>
            <Text style={{color: '#fff'}}>
              {mylatest_task && mylatest_task.status
                ? mylatest_task.status
                : 'Pending'}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: '65%',
          backgroundColor: '#ffffff',
          marginHorizontal: 20,
          borderRadius: 8,
          borderWidth: 0.5,
        }}>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Service</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {mylatest_task && mylatest_task.category_name
                ? mylatest_task.category_name
                : ''}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Date</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {mylatest_task && mylatest_task.on_date
                ? moment(mylatest_task.on_date).format('Do MMMM YYYY')
                : ''}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Time</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {mylatest_task && mylatest_task.on_time
                ? mylatest_task.on_time
                : ''}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Duration</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {mylatest_task && mylatest_task.duration
                ? mylatest_task.duration
                : ''}
              Hour(s)
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Location</Subheading>
            <Subheading style={{marginLeft: 20}}>{''}</Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Price Per Hour</Subheading>
            <Subheading style={{marginLeft: 20}}>
              ${mylatest_task && mylatest_task.ch_ph ? mylatest_task.ch_ph : ''}{' '}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Price</Subheading>
            <Subheading style={{marginLeft: 20}}>
              $
              {mylatest_task && mylatest_task.duration
                ? mylatest_task.duration * mylatest_task.ch_ph
                : '0.00'}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Plateform & Support fee</Subheading>
            <Subheading style={{marginLeft: 20}}>$0</Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
                color: '#000',
              }}>
              Total Cost
            </Subheading>
            <Subheading
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
                color: '#000',
              }}>
              $
              {mylatest_task && mylatest_task.duration
                ? mylatest_task.duration * mylatest_task.ch_ph
                : ''}
            </Subheading>
          </View>
        </View>
      </View>
      <View
        style={{
          // marginTop: 10,
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#503BB0', '#9F64C8']}
          style={{borderWidth: 1, borderRadius: 25, marginTop: 20}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SendMessage')}>
            <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
              Message to Provider
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#503BB0', '#9F64C8']}
          style={{borderWidth: 1, borderRadius: 25, marginTop: 20}}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
              Go Back
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#503BB0', '#9F64C8']}
          style={{borderWidth: 1, borderRadius: 25, marginTop: 20}}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // height: '100%',
  },
  linearGradient: {
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    // margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  subheadingText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    // marginLeft: 60,
    marginTop: 10,
  },

  divider: {
    borderWidth: 0.2,
    borderColor: '#503BB0',
    marginVertical: 10,
    width: '100%',
  },

  whiteBox: {
    // marginTop: 30,
    position: 'relative',
    height: 100,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 40,
    // marginHorizontal: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getMytask: () => dispatch(getMyLatestTask()),
});

const mapStateToProps = (state) => {
  console.log('on my task', state.services.mylatesttask);
  return {
    status: state.services.status,
    loading: state.services.loading,
    mylatest_task: state.services.mylatesttask,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTask);
// export default Summary;
