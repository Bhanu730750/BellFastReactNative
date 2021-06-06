import React, {Component} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import {View, Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/user/Profile';
import AddBusiness from '../screens/AddBusiness';
import Settings from '../screens/Settings';
import Policies from '../screens/Policies';
import Logout from '../screens/Logout';
import SubCatList from '../screens/SubCatList';
import Payments from '../screens/Payments';
import BusinessListing from '../screens/BusinessListing';
import BusinessDetails from '../screens/BusinessDetails';
import Wallet from '../screens/Wallet';
import BusinessRequest from '../screens/BusinessRequest';
import Subscription from '../screens/Subscription';
import SubscriptionConfirmed from '../screens/SubscriptionConfirmed';
import SearchScreen from '../screens/SearchScreen';
import PDFReader from '../screens/PDFReader';

import Test from '../screens/Test';
import Test1 from '../screens/Test1';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const WalletStack = createStackNavigator();
const BusinessStack = createStackNavigator();
const DashboardDrawer = createDrawerNavigator();
const SubscriptionStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ProfileTab = createMaterialTopTabNavigator();

const TestNav = createStackNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon name="bars" color="#ffffff" size={30} style={styles.headerIcon} />
      </TouchableOpacity>
    </View>
  );
};

const WalletHome = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
        }}
      />
    </WalletStack.Navigator>
  );
};

const SubscriptionHome = () => {
  return (
    <SubscriptionStack.Navigator>
      <SubscriptionStack.Screen
        name="Subscription"
        component={Subscription}
        options={{
          headerShown: false,
        }}
      />
      <SubscriptionStack.Screen
        name="SubscriptionConfirmed"
        component={SubscriptionConfirmed}
        options={{
          title: 'Subscription Confirmed',
          headerShown: false,
        }}
      />
    </SubscriptionStack.Navigator>
  );
};

const ProfileStackNav = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

const BusinessStackNav = () => {
  return (
    <BusinessStack.Navigator>
      <BusinessStack.Screen
        name="Add Business"
        component={AddBusiness}
        options={{
          headerShown: false,
        }}
      />
    </BusinessStack.Navigator>
  );
};

const HomeStackNav = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Need2Deal',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#81d7f8',
          },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
          headerLeft: ({}) => <HeaderLeft />,
          headerRight: () => (
            <Icon
              name="money"
              color="#ffffff"
              size={30}
              style={styles.headerIcon}
              onPress={() => navigation.push('Wallet')}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="SubCatList"
        component={SubCatList}
        options={{
          title: 'Sub Categories',
          headerRight: () => (
            <Icon
              name="search"
              color="#000000"
              size={20}
              style={styles.headerIcon}
              onPress={() => navigation.push('SearchScreen')}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'Search',
        }}
      />
      <HomeStack.Screen
        name="BusinessListing"
        component={BusinessListing}
        options={{
          title: 'All Business',
        }}
      />
      <HomeStack.Screen
        name="BusinessDetails"
        component={BusinessDetails}
        options={{
          title: 'Business Details',
        }}
      />
      <HomeStack.Screen
        name="Wallet"
        component={WalletHome}
        options={{
          title: 'My Wallet',
        }}
      />
      <HomeStack.Screen
        name="AddBusiness"
        component={BusinessStackNav}
        options={{
          title: 'Add Business',
        }}
      />
      <HomeStack.Screen
        name="Subscription"
        component={SubscriptionHome}
        options={{
          title: 'Subscribe Now',
        }}
      />

      <HomeStack.Screen
        name="Profile"
        component={ProfileStackNav}
        options={{
          title: 'My Profile',
        }}
      />
    </HomeStack.Navigator>
  );
};

const HomeDrawer = (props) => {
  return (
    <DashboardDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DashboardDrawer.Screen name="Home" component={HomeStackNav} />

      {/* <DashboardDrawer.Screen
        name="AddBusiness"
        component={BusinessStackNav}
        options={{
          headerShown: true,
        }}
      /> */}
      <DashboardDrawer.Screen
        name="Business Request"
        component={BusinessRequest}
        options={{
          headerShown: true,
        }}
      />
      <DashboardDrawer.Screen name="Payments" component={Payments} />
      <DashboardDrawer.Screen
        name="Policies"
        component={Policies}
        options={{
          headerShown: true,
        }}
      />
      <DashboardDrawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
        }}
      />
      <DashboardDrawer.Screen name="Logout" component={Logout} />
    </DashboardDrawer.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          initialRouteName="Login"
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Need2Deal"
          component={HomeDrawer}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
