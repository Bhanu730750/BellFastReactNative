import React, {useEffect} from 'react';
// import {connect} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Subheading, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as URL from '../config/Url';

const PostaTask = (props) => {
  const {user} = props;
  const url = `${URL.WEB_URL2}`;
  return (
    <View style={localStyles.container}>
      <Subheading
        style={{marginBottom: 20, marginHorizontal: 20, marginTop: 40}}>
        Post A Task?
      </Subheading>
      <View
        style={{
          height: '62%',
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20,
          borderRadius: 8,
          borderWidth: 0.1,
        }}>
        <View style={{padding: 15}}>
          <Text
            style={{fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Divider style={localStyles.divider} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: '#000',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Date</Subheading>
            <Subheading style={{marginLeft: 20}}>Wed, 12 July 2020</Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Time</Subheading>
            <Subheading style={{marginLeft: 20}}> Morning</Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Location</Subheading>
            <Subheading style={{marginLeft: 20}}>Noida, India</Subheading>
          </View>
          <Divider style={localStyles.divider} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>Total Price</Subheading>
            <Subheading style={{marginLeft: 20}}>N300</Subheading>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
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
          <TouchableOpacity>
            <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
              Post Task
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
});

export default PostaTask;
