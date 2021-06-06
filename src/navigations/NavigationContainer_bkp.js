import React, {Component} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import {View, Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import Login from '../screens/auth/Login';
import Registration from '../screens/auth/Registration';
import ResetPassword from '../screens/auth/ResetPassword';
import Dashboard from '../screens/Dashboard';

import Profile from '../screens/Profile';
import ForSaleProducts from '../screens/ForSaleProducts';
import ForSaleDetails from '../screens/ForSaleDetails';
import ForSaleCart from '../screens/ForSaleCart';
import Request from '../screens/Request';
import RequestResult from '../screens/RequestResult';
import Test2 from '../screens/Test3';
import Test3 from '../screens/Test3';
import Test4 from '../screens/Test4';

import MyPawns from '../screens/MyPawns';
import NewPawns from '../screens/NewPawns';
import AcceptedPawns from '../screens/AcceptedPawns';
import AcceptedPawnsDetails from '../screens/AcceptedPawnsDetails';
import NewPawnsDetails from '../screens/NewPawnsDetails';
import PDFReader from '../screens/PDFReader';
import Logout from '../screens/auth/Logout';
import BankDetails from '../screens/BankDetails';
import ProfileUpdate from '../screens/ProfileUpdate';
import KYCUpdate from '../screens/KYCUpdate';
import Wallet from '../screens/Wallet';
import AddAmountToWallet from '../screens/AddAmountToWallet';
import HelpDesk from '../screens/HelpDesk';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import FailureScreen from '../screens/FailureScreen';
import Checkout from '../screens/Checkout';
import OrderList from '../screens/OrderList';
import AcceptCheckout from '../screens/AcceptCheckout';

// Prototype ends
// import HomeDrawerNavigator from './DrawerContainer/';
// import HeaderLeft from './HeaderLeftIcon';
// import HeaderLeftCross from './HeaderLeftCross';
// import HeaderTitle from './HeaderTitle';

// import Colors from '../config/Colors';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();
const PawnStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ForeSaleStack = createStackNavigator();
const AcceptedPawnsStack = createStackNavigator();
const NewPawnsStack = createStackNavigator();
const WalletStack = createStackNavigator();
const AcceptStack = createStackNavigator();

const TopTabsNav = () => {
  return (
    <TopTabs.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12, textTransform: 'none'},
        activeTintColor: '#e91e63',
        activeTintColor: '#000000',
        inactiveTintColor: '#000000',
        style: {backgroundColor: '#F2F2F2'},
      }}>
      <TopTabs.Screen
        name="MyPawns"
        component={MyPawns}
        options={{
          headerShown: true,
          tabBarLabel: 'My Pawns',
          title: 'Dashboard',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
          headerLeft: ({}) => <HeaderLeft />,
          headerRight: () => (
            <Icon
              name="envelope-o"
              type="font-awesome"
              size={24}
              color="#4f3cb2"
              style={styles.headerIcon}
            />
          ),
        }}
      />
      <TopTabs.Screen
        name="NewPawnsNav"
        component={NewPawnsNav}
        options={{tabBarLabel: 'New Pawns'}}
      />
      <TopTabs.Screen
        name="AcceptedPawnsNav"
        component={AcceptedPawnsNav}
        options={{tabBarLabel: 'Accepted Pawns'}}
      />
    </TopTabs.Navigator>
  );
};

const BottomTabsNav = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      activeColor="#4f3cb2"
      inactiveColor="#000000"
      shifting={false}
      barStyle={{
        paddingBottom: 5,
        backgroundColor: '#FFFFFF',
        borderTopColor: '#DDDDDD',
        borderTopWidth: 2,
      }}>
      <BottomTab.Screen
        name="DashboardStackNav"
        component={DashboardStackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="TopTabsNav"
        component={TopTabsNav}
        options={{
          tabBarLabel: 'Pawns',
          tabBarIcon: ({color}) => (
            <Icon name="users" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Request"
        component={Request}
        options={{
          tabBarLabel: 'Request',
          tabBarIcon: ({color}) => (
            <Icon name="comments-o" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ForSaleStackNav"
        component={ForSaleStackNav}
        options={{
          tabBarLabel: 'For Sale',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-basket" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileStackNav"
        component={ProfileStackNav}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          alert('hello');
          // navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon
          name="envelope-o"
          color="#4f3cb2"
          type="font-awesome"
          size={24}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

// Pawns
const PawnsStackNav = () => {
  return (
    <PawnStack.Navigator>
      <PawnStack.Screen name="Test1" component={Test1} />
    </PawnStack.Navigator>
  );
};

const WalletStackNav = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: true,
          title: 'My Wallet',
        }}
      />
      <WalletStack.Screen
        name="AddAmountToWallet"
        component={AddAmountToWallet}
        options={{
          headerShown: true,
          title: 'Add Money',
        }}
      />
    </WalletStack.Navigator>
  );
};

// Profile Stack
const ProfileStackNav = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
        }}
      />
      <ProfileStack.Screen
        name="PDFReader"
        component={PDFReader}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="BankDetails"
        component={BankDetails}
        options={{
          headerShown: true,
        }}
      />
      <ProfileStack.Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        options={{
          headerShown: true,
          title: 'Profile Update',
        }}
      />
      <ProfileStack.Screen
        name="KYCUpdate"
        component={KYCUpdate}
        options={{
          headerShown: true,
          title: 'KYC Update',
        }}
      />
      <ProfileStack.Screen
        name="Wallet"
        component={WalletStackNav}
        options={{
          headerShown: false,
          title: 'My Wallet',
        }}
      />
      <ProfileStack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          headerShown: true,
          title: 'My Orders',
        }}
      />
      <ProfileStack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
        options={{
          headerShown: true,
          title: 'Confirmation',
        }}
      />
      <ProfileStack.Screen
        name="FailureScreen"
        component={FailureScreen}
        options={{
          headerShown: true,
          title: 'Failed',
        }}
      />
      <ProfileStack.Screen
        name="HelpDesk"
        component={HelpDesk}
        options={{
          headerShown: true,
          title: 'Support',
        }}
      />
    </ProfileStack.Navigator>
  );
};

// for sale Stack
const ForSaleStackNav = () => {
  return (
    <ForeSaleStack.Navigator>
      <ForeSaleStack.Screen
        name="For Sale"
        component={ForSaleProducts}
        options={{
          headerShown: true,
        }}
      />
      <ForeSaleStack.Screen
        name="ForSaleDetails"
        component={ForSaleDetails}
        options={{
          headerShown: true,
          title: 'For Sale Details',
        }}
      />
      <ForeSaleStack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: 'Check Out',
          headerShown: true,
        }}
      />
      <ProfileStack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
        options={{
          headerShown: true,
          title: 'Confirmation',
        }}
      />
      <ProfileStack.Screen
        name="FailureScreen"
        component={FailureScreen}
        options={{
          headerShown: true,
          title: 'Failed',
        }}
      />
    </ForeSaleStack.Navigator>
  );
};

// for sale Stack
const AcceptStackNav = () => {
  return (
    <AcceptStack.Navigator>
      <AcceptStack.Screen
        name="AcceptCheckout"
        component={AcceptCheckout}
        options={{
          title: 'Check Out',
          headerShown: true,
        }}
      />
      <AcceptStack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
        options={{
          headerShown: true,
          title: 'Confirmation',
        }}
      />
      <AcceptStack.Screen
        name="FailureScreen"
        component={FailureScreen}
        options={{
          headerShown: true,
          title: 'Failed',
        }}
      />
    </AcceptStack.Navigator>
  );
};

// for sale Stack
const AcceptedPawnsNav = () => {
  return (
    <AcceptedPawnsStack.Navigator>
      <AcceptedPawnsStack.Screen
        name="AcceptedPawns"
        component={AcceptedPawns}
        options={{
          headerShown: false,
        }}
      />
      <AcceptedPawnsStack.Screen
        name="AcceptedPawnsDetails"
        component={AcceptedPawnsDetails}
        options={{
          headerShown: false,
          title: 'For Sale Details',
        }}
      />
       <AcceptedPawnsStack.Screen
        name="AcceptCheckout"
        component={AcceptCheckout}
        options={{
          headerShown: true,
          title: 'Accept Checkout',
        }}
      />
    </AcceptedPawnsStack.Navigator>
  );
};

// for sale Stack
const NewPawnsNav = () => {
  return (
    <NewPawnsStack.Navigator>
      <NewPawnsStack.Screen
        name="NewPawns"
        component={NewPawns}
        options={{
          headerShown: false,
        }}
      />
      <NewPawnsStack.Screen
        name="NewPawnsDetails"
        component={NewPawnsDetails}
        options={{
          headerShown: false,
          title: 'New Pawns Details',
        }}
      />
    </NewPawnsStack.Navigator>
  );
};

//Dashboard Stack
const DashboardStackNav = () => {
  const navigation = useNavigation();
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Home',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          headerRight: () => (
            <Icon
              name="sign-out"
              type="font-awesome"
              size={24}
              color="#4f3cb2"
              style={styles.headerIcon}
              onPress={() => {
                navigation.navigate('Logout');
              }}
            />
          ),
        }}
      />
      <DashboardStack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  );
};

const HomeStackNav = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dashboard"
        component={BottomTabsNav}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RequestResult"
        component={RequestResult}
        options={{headerShown: true, title: 'Request Result'}}
      />

      {/* <HomeStack.Screen
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
      />*/}
    </HomeStack.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Dashboard"
          component={HomeStackNav}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
