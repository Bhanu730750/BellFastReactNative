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
import Landing from '../screens/Landing';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import Logout from '../screens/auth/Logout';
import ResetPassword from '../screens/auth/ResetPassword';
import Profile from '../screens/Profile';
import HousekeeperProfile from '../screens/HousekeeperProfile';
import PostaTask from '../screens/PostaTask';
import MyTask from '../screens/MyTask';
import PostaTaskForm from '../screens/PostaTaskForm';
import UpcomingBookings from '../screens/UpcomingBookings';
import OngoiningBookings from '../screens/OngoiningBookings';
import TaskDetails from '../screens/TaskDetails';
import TaskList from '../screens/TaskList';
import OrderList from '../screens/OrderList';
import Welcome from '../screens/auth/Welcome';
import Payment from '../screens/Payment';
import Summary from '../screens/Summary';
import Success from '../screens/Success';

import RequestAcceptedSuccessfully from '../screens/RequestAcceptedSuccessfully';
import AddAmountToWallet from '../screens/AddAmountToWallet';

import ProfileUpdate from '../screens/ProfileUpdate';
// import Registration from '../screens/auth/Registration';
// import ResetPassword from '../screens/auth/ResetPassword';
import Dashboard from '../screens/Dashboard';
import ProviderDashboard from '../screens/ProviderDashboard';
import MessageList from '../screens/MessageList';
import SendMessage from '../screens/SendMessage';
import MessageDetails from '../screens/MessageDetails';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
// const TopTabs = createMaterialTopTabNavigator();
// const PawnStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const OrderListStack = createStackNavigator();
const MessageStack = createStackNavigator();
// Temp stack
const WelcomeStack = createStackNavigator();
// const WelcomeStackNav = () => {
//   return (
//     <NavigationContainer>
//       <WelcomeStack.Navigator>
//         <WelcomeStack.Screen
//           name="Welcome"
//           component={Welcome}
//           options={{
//             headerShown: false,
//           }}
//         />

//         <WelcomeStack.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             title: 'Profile',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />

//         <WelcomeStack.Screen
//           name="Dashboard"
//           component={Dashboard}
//           options={{
//             title: 'Dashboard',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />
//         <WelcomeStack.Screen
//           name="HousekeeperProfile"
//           component={HousekeeperProfile}
//           options={{
//             title: 'Profile',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />
//         <WelcomeStack.Screen
//           name="PostaTask"
//           component={PostaTask}
//           options={{
//             title: 'Post A Task',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />
//         <WelcomeStack.Screen
//           name="UpcomingBookings"
//           component={UpcomingBookings}
//           options={{
//             title: 'Upcoming Bookings',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />
//         <WelcomeStack.Screen
//           name="OngoiningBookings"
//           component={OngoiningBookings}
//           options={{
//             title: 'Ongoining Bookings',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />
//         <WelcomeStack.Screen
//           name="TaskList"
//           component={TaskList}
//           options={{
//             title: 'Task List',
//             showIcon: true,
//             headerStyle: {
//               backgroundColor: '#F2F2F2',
//             },
//             headerTintColor: '#4f3cb2',
//             headerTitleAlign: 'center',
//           }}
//         />
//       </WelcomeStack.Navigator>
//     </NavigationContainer>
//   );
// };

// Profile Stack
const WelcomeStackNav = () => {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: true,
        }}
      />
    </WelcomeStack.Navigator>
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
          title: 'Profile',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="PostaTask"
        component={PostaTask}
        options={{
          title: 'Post A Task',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="MyTask"
        component={MyTask}
        options={{
          title: 'My Latest Task',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="UpcomingBookings"
        component={UpcomingBookings}
        options={{
          title: 'My Bookings',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          title: 'Order List',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="OngoiningBookings"
        component={OngoiningBookings}
        options={{
          title: 'Bookings',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        options={{
          title: 'Profile Update',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="AddAmountToWallet"
        component={AddAmountToWallet}
        options={{
          title: 'Add Money',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="SendMessage"
        component={SendMessage}
        options={{
          title: 'Send Message',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          title: 'Task Details',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
        }}
      />
    </ProfileStack.Navigator>
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
//Dashboard Stack
const DashboardStackNav = () => {
  const navigation = useNavigation();
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={ProviderDashboard}
        options={{
          title: 'Dashboard',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          headerRight: () => (
            <Icon
              name="power-off"
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

//Dashboard Stack
const CustomerDashboardStackNav = () => {
  const navigation = useNavigation();
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          headerRight: () => (
            <Icon
              name="power-off"
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
const BottomTabsNav = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ProviderDashboard"
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
        name="OrderListNav"
        component={OrderListNav}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="MessageNav"
        component={MessageNav}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color}) => (
            <Icon name="comments-o" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileStackNav"
        component={ProfileStackNav}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
        }}
      />
      {/* <BottomTab.Screen
        name="WelcomeStackNav"
        component={WelcomeStackNav}
        options={{
          tabBarLabel: 'Screens',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
};

const CustBottomTabsNav = () => {
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
        name="CustomerDashboardStackNav"
        component={CustomerDashboardStackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      {/* <BottomTab.Screen
        name="PostaTaskForm"
        component={PostaTaskForm}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <Icon name="plus-square" color={color} size={24} />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="MyTask"
        component={MyTask}
        options={{
          tabBarLabel: 'My Task',
          tabBarIcon: ({color}) => (
            <Icon name="clipboard" color={color} size={24} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({color}) => (
            <Icon name="money" color={color} size={24} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="HousekeeperProfile"
        component={HousekeeperProfile}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color}) => (
            <Icon name="comments-o" color={color} size={24} />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="ProfileStackNav"
        component={ProfileStackNav}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
        }}
      />
      {/* <BottomTab.Screen
        name="WelcomeStackNav"
        component={WelcomeStackNav}
        options={{
          tabBarLabel: 'Screens',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
        }}
      /> */}
    </BottomTab.Navigator>
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
    </HomeStack.Navigator>
  );
};

const OrderListNav = () => {
  const navigation = useNavigation();
  return (
    <OrderListStack.Navigator>
      <OrderListStack.Screen
        name="OngoiningBookings"
        component={OngoiningBookings}
        options={{headerShown: false}}
      />
      <OrderListStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{headerShown: true}}
        options={{
          title: 'Task Details',
        }}
      />
      <OrderListStack.Screen
        name="RequestAcceptedSuccessfully"
        component={RequestAcceptedSuccessfully}
        options={{headerShown: true}}
        options={{
          title: 'Success',
        }}
      />
      <OrderListStack.Screen
        name="SendMessage"
        component={SendMessage}
        options={{headerShown: true}}
        options={{
          title: 'Task Details',
        }}
      />
    </OrderListStack.Navigator>
  );
};

const MessageNav = () => {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="MessageList"
        component={MessageList}
        options={{
          title: 'Messages',
          headerShown: true,
        }}
      />
      <MessageStack.Screen
        name="MessageDetails"
        component={MessageDetails}
        options={{
          title: 'Message Details',
          headerShown: true,
        }}
      />
      <MessageStack.Screen
        name="SendMessage"
        component={SendMessage}
        options={{headerShown: true}}
      />
    </MessageStack.Navigator>
  );
};

const CustHomeStackNav = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="CustomerDashboard"
        component={CustBottomTabsNav}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="PostaTaskForm"
        component={PostaTaskForm}
        options={{
          title: 'Post Your Task',
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Summary"
        component={Summary}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
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
          name="SignUp"
          component={SignUp}
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
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Dashboard"
          component={CustHomeStackNav}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="ProviderDashboard"
          component={HomeStackNav}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
