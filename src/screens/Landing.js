import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Loader from '../components/Spinner';
import {connect} from 'react-redux';
import {getUserDetail} from '../store/actions/Dashboard';

const Landing = (props) => {
  const {user, status, loading, getDetails} = props;
  useEffect(() => {
    getDetails();
  }, []);
  useEffect(() => {
    if (status === 200) {
      if (user && user.role_id == 2) {
        props.navigation.navigate('Dashboard');
      } else {
        props.navigation.navigate('ProviderDashboard');
      }
    }
  }, [status, user]);

  return <Loader loading={loading} />;
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
  getDetails: () => dispatch(getUserDetail()),
});

const mapStateToProps = (state) => {
  console.log('here is dashboard state', state);
  return {
    status: state.dashboard.status,
    error: state.dashboard.error,
    loading: state.dashboard.loading,
    user: state.dashboard.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
