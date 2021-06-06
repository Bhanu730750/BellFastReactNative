import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-crop-picker';
import {saveProfileDetailsNow} from '../store/actions';
import Geolocation from '@react-native-community/geolocation';
import Loader from '../components/Spinner';
import {Root, Popup} from 'popup-ui';

const ProfileUpdate = (props) => {
  const [contactNumber, setContactNumber] = useState('');
  const [fullname, setFullname] = useState('');
  const [fulladdress, setFullAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [laties, setLati] = useState('');
  const [longies, setLongi] = useState('');

  const [fullnameError, setFullnameError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [fulladdressError, setFullAddressError] = useState('');
  const [zipCodeError, setZipCodeError] = useState('');
  const [provinceError, setProvinceError] = useState('');
  const [cityError, setCityError] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState('');
  const [imageError, setImageError] = useState('');

  const {user, status, loading, save_UserProfileNow} = props;

  const onRequestSubmit = () => {
    setIsLoading(true);
    if (
      fullname != '' &&
      contactNumber != '' &&
      zipCode != '' &&
      city != '' &&
      province != '' &&
      fulladdress != '' &&
      images != ''
    ) {
      let dataArr = [];
      dataArr.fullname = fullname;
      dataArr.contact_number = contactNumber;
      dataArr.zip_code = zipCode;
      dataArr.city = city;
      dataArr.province = province;
      dataArr.fulladdress = fulladdress;
      dataArr.images = images;
      dataArr.lati = laties;
      dataArr.longi = longies;
      // console.log('dataArrdataArr', dataArr);
      save_UserProfileNow(dataArr);
    } else {
      fullname === '' ? setFullnameError('Please enter fullname') : null;
      contactNumber === ''
        ? setContactNumberError('Please enter contact number')
        : null;
      fulladdress === ''
        ? setFullAddressError('Please enter full address')
        : null;
      province === '' ? setProvinceError('Please choose province') : null;
      zipCode === '' ? setZipCodeError('Please enter zip code') : null;
      city === '' ? setCityError('Please choose city') : null;
      images === '' ? setImageError('Please pick an image') : null;
    }
  };

  const onProvinceValueChange = (value) => {
    setProvince(value);
  };

  const onCityValueChange = (value) => {
    setCity(value);
  };
  const picksingle = () => {
    ImagePicker.openPicker({
      multiple: false,
      waitAnimationEnd: false,
      includeExif: true,
    })
      .then((images) => {
        setImages(images);
      })
      .catch((e) => alert(e));
  };
  const onDoctypeValueChange = (value) => {
    setDocType(value);
  };

  useEffect(() => {
    status === 200
      ? Popup.show({
          type: 'Success',
          title: 'Profile Updated',
          button: true,
          textBody: 'Congrats! Your update successfully done',
          buttonText: 'Ok',
          callback: () => Popup.hide(),
        })
      : null;
  }, [status]);

  useEffect(() => {
    // console.log('called add business actions');
    Geolocation.getCurrentPosition(
      (position) => {
        const lati = JSON.stringify(position.coords.latitude);
        const longi = JSON.stringify(position.coords.longitude);
        setLati(lati);
        setLongi(longi);
        // console.log(position, lati, longi);
      },
      (error) =>
        Alert.alert('Error', JSON.stringify(error, 'Please turn on GPS')),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <Root>
      <View style={localStyle.rcontainer}>
        <View style={localStyle.container}>
          <Loader loading={loading} />
          <ScrollView>
            {errorMessage ? (
              <View style={{alignItems: 'center', top: 10, marginBottom: -20}}>
                <Text style={{color: '#FF0000'}}>{errorMessage}</Text>
              </View>
            ) : null}
            <View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Upload Profile Image</Text>
                <View
                  style={{
                    marginVertical: 10,
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="upload"
                    type="font-awesome"
                    size={50}
                    color="#5B43B4"
                    onPress={() => picksingle()}
                    style={{
                      padding: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  {images ? (
                    <View style={localStyle.itemImage}>
                      <Image
                        style={{
                          width: 70,
                          height: 90,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                        source={{
                          uri: images.path,
                        }}
                      />
                    </View>
                  ) : null}
                </View>
                {imageError ? (
                  <Text style={{color: '#FF0000', fontSize: 13}}>
                    {imageError}
                  </Text>
                ) : null}
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Full Name</Text>
                <Input
                  onChangeText={(value) => setFullname(value)}
                  errorStyle={{color: '#FF0000'}}
                  errorMessage={fullnameError}
                  value={fullname}
                  style={{width: '100%'}}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Contact Number</Text>
                <Input
                  onChangeText={(value) => setContactNumber(value)}
                  errorStyle={{color: '#FF0000'}}
                  errorMessage={contactNumberError}
                  value={contactNumber}
                  style={{width: '100%'}}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Full Address</Text>
                <Input
                  onChangeText={(value) => setFullAddress(value)}
                  errorStyle={{color: '#FF0000'}}
                  errorMessage={fulladdressError}
                  value={fulladdress}
                  style={{width: '100%'}}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Province</Text>
                <Picker
                  selectedValue={province}
                  onValueChange={(itemValue, itemIndex) =>
                    onProvinceValueChange(itemValue)
                  }
                  style={{
                    height: 50,
                    width: '100%',
                    borderWidth: 2,
                    borderBottomColor: 'red',
                  }}>
                  <Picker.Item label="Choose" value="" />
                  <Picker.Item label="Eastern Cape" value="Eastern Cape" />
                  <Picker.Item label="North West" value="North West" />
                  <Picker.Item label="KwaZulu Natal" value="KwaZulu Natal" />
                  <Picker.Item label="Mpumalanga" value="Mpumalanga" />
                  <Picker.Item label="Gauteng" value="Gauteng" />
                </Picker>
                {provinceError ? (
                  <Text style={{color: '#FF0000', fontSize: 13}}>
                    {provinceError}
                  </Text>
                ) : null}
              </View>

              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>City</Text>
                <Picker
                  selectedValue={city}
                  onValueChange={(itemValue1, itemIndex1) =>
                    onCityValueChange(itemValue1)
                  }
                  style={{
                    height: 50,
                    width: '100%',
                    borderWidth: 2,
                    borderBottomColor: 'red',
                  }}>
                  <Picker.Item label="Choose" value="" />
                  <Picker.Item label="Grantion" value="Grantion" />
                  <Picker.Item label="Grantleigh" value="Grantleigh" />
                  <Picker.Item label="Graskop" value="Graskop" />
                  <Picker.Item label="Grasmere" value="Grasmere" />
                  <Picker.Item label="Gqaka" value="Gqaka" />
                </Picker>
                {cityError ? (
                  <Text style={{color: '#FF0000', fontSize: 13}}>
                    {cityError}
                  </Text>
                ) : null}
              </View>

              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Zip Code</Text>
                <Input
                  onChangeText={(value) => setZipCode(value)}
                  errorStyle={{color: '#FF0000'}}
                  errorMessage={zipCodeError}
                  value={zipCode}
                  style={{width: '100%'}}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Latitude</Text>
                <Input
                  onChangeText={(value) => setLati(value)}
                  value={laties}
                  style={{width: '100%'}}
                  disabled={true}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text style={localStyle.titleText}>Longitude</Text>
                <Input
                  onChangeText={(value) => setLongi(value)}
                  value={longies}
                  style={{width: '100%'}}
                  disabled={true}
                />
              </View>

              <View style={{marginTop: 10, marginBottom: 50}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#503BB0', '#9F64C8']}
                  style={localStyle.linearGradient}>
                  <TouchableOpacity onPress={() => onRequestSubmit()}>
                    <Text style={Styles.buttonText}>Save Details</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Root>
  );
};

const localStyle = StyleSheet.create({
  rcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  headline: {
    fontFamily: 'Poppins-Medius',
    fontSize: 16,
    justifyContent: 'flex-start',
  },
  subheading: {
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  textLeft: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  textRight: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#d2d2d2',
    marginVertical: 10,
  },
  linearGradient: {
    marginVertical: 20,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 13,
    color: '#5a42b5',
  },
  itemImage: {
    height: 85,
    justifyContent: 'center',
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: 20,
  },
});

const mapDispatchToProps = (dispatch) => ({
  save_UserProfileNow: (dataArr) => dispatch(saveProfileDetailsNow(dataArr)),
});

const mapStateToProps = (state) => {
  console.log('on bank request screen', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);
