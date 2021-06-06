import {StyleSheet, Dimensions, Platform} from 'react-native';

export default StyleSheet.create({
  MainContainer: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',

    // Set hex color code here.
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',

    // Set hex color code here.
    backgroundColor: '#FFFFFF',
  },
  headerIcon: {
    marginLeft: 20,
    marginRight: 20,
    color: 'red',
  },
  homeTabNav: {
    fontSize: 14,
    textTransform: 'none',
    fontFamily: 'Roboto-Medium',
    lineHeight: 22,
  },
  linearGradient: {
    borderRadius: 20,
    width: '100%',
    position: 'absolute',
    marginTop: 380,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  tableHeader: {
    backgroundColor: '#503BB0',
    width: '100%',
  },
  tableDark: {
    backgroundColor: '#CDD4EA',
    width: '100%',
    marginTop: 2,
  },
  tableLight: {
    backgroundColor: '#E8EBF5',
    width: '100%',
    marginTop: 2,
  },
  tableText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 5,
    paddingLeft: 12,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  tableTextBlack: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 5,
    paddingLeft: 12,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
