import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
// import {AuthContext} from '../components/context';
import * as URL from '../config/Url';
const DrawerContent = props => {
  const {userdata} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <>
                {userdata.image ? (
                  <Avatar.Image
                    source={{
                      uri: `${URL.WEB_URL}public/files/${userdata.image}`,
                    }}
                    size={50}
                  />
                ) : (
                  <Avatar.Image
                    source={{
                      uri:
                        'https://api.adorable.io/avatars/50/abott@adorable.png',
                    }}
                    size={50}
                  />
                )}
              </>
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>
                  {userdata.first_name.toUpperCase()}{' '}
                  {userdata.last_name.toUpperCase()}
                </Title>

                <Caption style={styles.caption}>ID: {userdata.user_id}</Caption>
              </View>
              <View
                style={{
                  marginLeft: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {userdata.user_plan === '1' ? (
                  <Avatar.Image
                    source={require('../assets/img/red.png')}
                    size={50}
                  />
                ) : userdata.user_plan === '2' ? (
                  <Avatar.Image
                    source={require('../assets/img/blue.png')}
                    size={50}
                  />
                ) : (
                  <Avatar.Image
                    source={require('../assets/img/green.png')}
                    size={50}
                  />
                )}
                {userdata.user_plan === '1' ? (
                  <Caption style={styles.caption}>Basic</Caption>
                ) : userdata.user_plan === '2' ? (
                  <Caption style={styles.caption}>Free</Caption>
                ) : (
                  <Caption style={styles.caption}>Business</Caption>
                )}
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Direct</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Team</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wallet-outline" color={color} size={size} />
              )}
              label="Subscription"
              onPress={() => {
                props.navigation.navigate('Subscription');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wallet-outline" color={color} size={size} />
              )}
              label="My Wallet"
              onPress={() => {
                props.navigation.navigate('Wallet');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="note-plus-outline" color={color} size={size} />
              )}
              label="Add Business"
              onPress={() => {
                props.navigation.navigate('AddBusiness');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="format-list-bulleted" color={color} size={size} />
              )}
              label="My Business"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="format-list-checks" color={color} size={size} />
              )}
              label="View Request"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="file-document-outline" color={color} size={size} />
              )}
              label="Your Orders"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            /> */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Legals">
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="file-outline" color={color} size={size} />
              )}
              label="Policies"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Terms & Conditions"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="file-document-outline" color={color} size={size} />
              )}
              label="Legal Documents"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            {/* <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          //   onPress={() => {
          //     signOut();
          //   }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

const mapDispatchToProps = dispatch => ({
  // authenticate: (email, password) => dispatch(initLogin(email, password)),
  // checkAuth: () => dispatch(initAuthStatus()),
});

const mapStateToProps = state => {
  console.log('this is initial state', state);
  return {
    userdata: state.auth.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);
// export default DrawerContent;
