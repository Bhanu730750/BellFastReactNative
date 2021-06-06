import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTaskDetails, acceptRequestProcess} from '../store/actions';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';
import moment from 'moment';
import Loader from '../components/Spinner';

const TaskDetails = (props) => {
  console.log('jgkjhkhkhkh', props);
  const url = `${URL.WEB_URL2}`;
  const {
    getMytaskDetails,
    acceptRequestProcess,
    status,
    taskdetails,
    loading,
    requestaccepted,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMytaskDetails(props.route.params.id);
  }, [props.route.params.id]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getMytaskDetails(props.route.params.id);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);

  const acceptRequest = (id) => {
    console.log('here is id', id);
    acceptRequestProcess(id);
  };

  useEffect(() => {
    // console.log('requestaccepted', requestaccepted);

    if (requestaccepted === 200) {
      props.navigation.navigate('RequestAcceptedSuccessfully');
    }
  }, [requestaccepted]);

  return (
    <ScrollView>
      <View style={localStyles.container}>
        <Loader loading={loading} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Subheading
            style={{marginBottom: 20, marginHorizontal: 20, marginTop: 10}}>
            Current Status
          </Subheading>
          <View style={{marginBottom: 20, marginHorizontal: 20, marginTop: 10}}>
            <View
              style={{
                backgroundColor: 'red',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 15,
              }}>
              <Text style={{color: '#fff'}}>
                {taskdetails && taskdetails.status == 1
                  ? 'Processed'
                  : 'Pending'}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: '67%',
            backgroundColor: '#FFFFFF',
            marginHorizontal: 20,
            borderRadius: 8,
            borderWidth: 0.1,
          }}>
          <View style={{padding: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Service</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {taskdetails && taskdetails.category_name
                  ? taskdetails.category_name
                  : ''}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Date</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {taskdetails && taskdetails.on_date
                  ? moment(taskdetails.on_date).format('Do MMMM YYYY')
                  : ''}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Time</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {taskdetails && taskdetails.on_time ? taskdetails.on_time : ''}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Duration</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {taskdetails && taskdetails.duration
                  ? taskdetails.duration
                  : ''}
                Hour(s)
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Location</Subheading>
              <Subheading style={{marginLeft: 20}}>{''}</Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Price Per Hour</Subheading>
              <Subheading style={{marginLeft: 20}}>
                ${taskdetails && taskdetails.ch_ph ? taskdetails.ch_ph : ''}{' '}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Price</Subheading>
              <Subheading style={{marginLeft: 20}}>
                $
                {taskdetails && taskdetails.duration
                  ? taskdetails.duration * taskdetails.ch_ph
                  : '0.00'}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Plateform & Support fee</Subheading>
              <Subheading style={{marginLeft: 20}}>$0</Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                {taskdetails && taskdetails.duration
                  ? taskdetails.duration * taskdetails.ch_ph
                  : ''}
              </Subheading>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          {taskdetails && taskdetails.status === 0 ? (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#503BB0', '#9F64C8']}
              style={{borderWidth: 1, borderRadius: 25}}>
              <TouchableOpacity onPress={() => acceptRequest(taskdetails.id)}>
                <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
                  Accept
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          ) : null}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#503BB0', '#9F64C8']}
            style={{borderWidth: 1, borderRadius: 25, marginTop: 20}}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('SendMessage', {
                  id: taskdetails.duration,
                })
              }>
              <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
                Message to Customer
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
                Go Back
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFE',
  },
  linearGradient: {
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    margin: 10,
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
    marginTop: 30,
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
    marginVertical: 40,
    marginHorizontal: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getMytaskDetails: (id) => dispatch(getTaskDetails(id)),
  acceptRequestProcess: (id) => dispatch(acceptRequestProcess(id)),
});

const mapStateToProps = (state) => {
  // console.log('on my taskxxxxx', state.services.requestaccepted);
  return {
    status: state.services.status,
    loading: state.services.loading,
    taskdetails: state.services.taskdetails,
    requestaccepted: state.services.requestaccepted,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
// export default Summary;
