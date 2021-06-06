import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Styles from '../css/Styles';

const Loader = (props) => {
  return (
    <Spinner
      visible={props.loading}
      textContent={'Loading...'}
      textStyle={Styles.spinnerTextStyle}
    />
  );
};

export default Loader;
