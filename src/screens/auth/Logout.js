import React, {useState, useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {initLogout} from '../../store/actions';
import RNRestart from 'react-native-restart';

const Logout = (props) => {
  const {initLogout, token} = props;

  useEffect(() => {
    initLogout();
  }, []);

  useEffect(() => {
    token === null ? RNRestart.Restart() : null;
  }, [token]);
  if (token !== null) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return RNRestart.Restart();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => ({
  initLogout: () => dispatch(initLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
