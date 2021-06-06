import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getMyLatestTask} from '../store/actions';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';
import moment from 'moment';
import Loader from '../components/Spinner';

const SendMessage = (props) => {
  // console.log(props);
  const url = `${URL.WEB_URL2}`;

  const [messageid, setMessageId] = useState(null);
  const [msgContents, setMessageCont] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessageId(props.route.params.id);
  }, [props.route.params.id]);

  const sendMessage = () => {
    if (messageid !== null) {
      setIsLoading(true);
    } else {
      alert('Unable to send message!');
    }
  };

  const onMessageChange = (value) => {
    // console.log(value);
    // setUseridError('');
    setMessageCont(value);
  };

  return (
    <ScrollView>
      <View style={localStyles.container}>
        <Loader loading={isLoading} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Subheading
            style={{marginBottom: 20, marginHorizontal: 20, marginTop: 40}}>
            Write your message below
          </Subheading>
        </View>

        <View
          style={{
            height: '62%',
            backgroundColor: '#FFFFFF',
            marginHorizontal: 20,
            borderRadius: 8,
            borderWidth: 0.1,
          }}>
          <View style={{padding: 15}}>
            <TextInput
              style={localStyles.input}
              multiline={true}
              numberOfLines={4}
              value={msgContents}
              onChangeText={(value) => onMessageChange(value)}
            />
          </View>
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
          <TouchableOpacity onPress={() => sendMessage()}>
            <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
              Send Messaged
            </Text>
          </TouchableOpacity>
        </LinearGradient>
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
  input: {
    width: '100%',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getMytask: () => dispatch(getMyLatestTask()),
});

const mapStateToProps = (state) => {
  console.log('on my task', state.services.mylatesttask);
  return {
    status: state.services.status,
    loading: state.posttask.loading,
    mylatest_task: state.services.mylatesttask,
    user: state.dashboard.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
// export default Summary;
