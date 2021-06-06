import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../css/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Success = (props) => {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Your Request has been submitted success.</Text>
      <Text>Your request will be published, after processing.</Text>
      <Text>Thanks!!!</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#503BB0', '#9F64C8']}
        style={{borderWidth: 1, borderRadius: 25, marginTop: 30}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CustomerDashboard')}>
          <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
            Go To Dashboard
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Success;
