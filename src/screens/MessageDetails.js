import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getMessageDetails} from '../store/actions';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';
import moment from 'moment';
import Loader from '../components/Spinner';

const MessageDetails = (props) => {
  // console.log(props);
  const url = `${URL.WEB_URL2}`;
  const {getmessagedetails, status, messagedetails, loading} = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getmessagedetails(props.route.params.id);
  }, [props.route.params.id]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getmessagedetails(props.route.params.id);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);

  return (
    <ScrollView>
      <View style={localStyles.container}>
        <Loader loading={loading} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Subheading
            style={{marginBottom: 20, marginHorizontal: 20, marginTop: 40}}>
            Message
          </Subheading>
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            marginHorizontal: 20,
            borderRadius: 8,
            borderWidth: 0.1,
          }}>
          <View style={{padding: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Message From:</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {messagedetails && messagedetails.from_email
                  ? messagedetails.from_email
                  : ''}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Date:</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {messagedetails && messagedetails.post_date
                  ? moment(messagedetails.post_date).format('Do MMMM YYYY')
                  : ''}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Subheading>Message</Subheading>
              <Subheading style={{marginLeft: 20}}>
                {messagedetails && messagedetails.message
                  ? messagedetails.message
                  : ''}
              </Subheading>
            </View>
            <Divider style={localStyles.divider} />
          </View>
        </View>
        <View
          style={{
            marginTop: 60,
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#503BB0', '#9F64C8']}
            style={{borderWidth: 1, borderRadius: 25}}>
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
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('SendMessage', {
                  id:
                    messagedetails && messagedetails.id
                      ? messagedetails.id
                      : null,
                })
              }>
              <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
                Reply
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
    height: '100%',
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
    marginVertical: 20,
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
  getmessagedetails: (id) => dispatch(getMessageDetails(id)),
});

const mapStateToProps = (state) => {
  console.log('on my task', state.services.mylatesttask);
  return {
    status: state.messages.status,
    loading: state.messages.loading,
    messagedetails: state.messages.messagedetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetails);
// export default Summary;
