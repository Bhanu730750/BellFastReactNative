import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {submitServiceRequest} from '../store/actions';
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

const Summary = (props) => {
  const url = `${URL.WEB_URL2}`;
  const {submit_request, status} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [serviceTitle, setServiceTitle] = useState('');

  const submitrequest = () => {
    setIsLoading(true);
    submit_request(props.route.params.postdata);
  };
  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  useEffect(() => {
    if (props.route.params.postdata.service_category) {
      if (props.route.params.postdata.service_category === 1) {
        setServiceTitle('Housekeeping');
      }
      if (props.route.params.postdata.service_category === 2) {
        setServiceTitle('Errands');
      }
      if (props.route.params.postdata.service_category === 3) {
        setServiceTitle('Other Jobs');
      }
      if (props.route.params.postdata.service_category === 4) {
        setServiceTitle('Laundry');
      }
      if (props.route.params.postdata.service_category === 5) {
        setServiceTitle('Nanny');
      }
      if (props.route.params.postdata.service_category === 6) {
        setServiceTitle('Driver');
      }
      if (props.route.params.postdata.service_category === 7) {
        setServiceTitle('Child Care');
      }
      if (props.route.params.postdata.service_category === 8) {
        setServiceTitle('Chef/Butler');
      }
      if (props.route.params.postdata.service_category === 9) {
        setServiceTitle('Security');
      }
      if (props.route.params.postdata.service_category === 10) {
        setServiceTitle('Assistance');
      }
    }

    setIsLoading(false);
    if (status === 200) {
      props.navigation.navigate('Success');
    } else if (status === 402) {
      alert('Insufficient wallet balance, kindly topup your wallet.');
    }
  }, [status]);
  return (
    <View style={localStyles.container}>
      <Loader loading={isLoading} />
      <Subheading
        style={{marginBottom: 20, marginHorizontal: 20, marginTop: 40}}>
        Your Booking Summary
      </Subheading>
      <View
        style={{
          height: '65%',
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20,
          borderRadius: 8,
          borderWidth: 0.1,
        }}>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Service</Subheading>
            <Subheading style={{marginLeft: 20}}>{serviceTitle}</Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Date</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {moment(props.route.params.postdata.on_date).format(
                'Do MMMM YYYY',
              )}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Time</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {' '}
              {props.route.params.postdata.on_time}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Duration</Subheading>
            <Subheading style={{marginLeft: 20}}>
              {props.route.params.postdata.duration} Hour(s)
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
              ${props.route.params.postdata.duration * 15}{' '}
            </Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Price</Subheading>
            <Subheading style={{marginLeft: 20}}>$15</Subheading>
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
              ${props.route.params.postdata.duration * 15}{' '}
            </Subheading>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: '#a795e3', borderRadius: 25}}>
          <Text
            style={{
              ...Styles.buttonText,
              paddingHorizontal: 40,
              color: '#a795e3',
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#503BB0', '#9F64C8']}
          style={{borderWidth: 1, borderRadius: 25}}>
          <TouchableOpacity onPress={() => submitrequest()}>
            <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
              Confirm & Save
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
    backgroundColor: '#FFFFFF',
  },
  linearGradient: {
    borderRadius: 20,
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
    // height: '100%',
    // width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
});

const mapDispatchToProps = (dispatch) => ({
  submit_request: (dataArr) => dispatch(submitServiceRequest(dataArr)),
});

const mapStateToProps = (state) => {
  console.log('on summery task success task screen', state);
  return {
    status: state.services.status,
    loading: state.posttask.loading,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
// export default Summary;
