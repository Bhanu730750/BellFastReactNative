import {StyleSheet, Dimensions, Platform} from 'react-native';

export default StyleSheet.create({
  // Top Tab Containers/Navigators
  topTabStyle: {
    backgroundColor: '#313d4b',
    borderTopWidth: 0,
  },
  topTabLebelStyle: {
    width: 52, //Since we have total 4 tabs and full width is 100%
    height: 20,
    fontFamily: 'NotoSansCJKkr-Regular', //On place of NotoSansCJKkr
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.42,
    textAlign: 'center',
    color: '#ffffff',
  },
  tabSelectionOn: {
    borderBottomColor: '#fafafa',
    borderBottomWidth: 2, //Bottom Width
    borderTopWidth: 0,
  },
});
