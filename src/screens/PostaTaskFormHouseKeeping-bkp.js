import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, ScrollView, Alert, Button} from 'react-native';
import {Subheading, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../css/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import * as URL from '../config/Url';
import {Picker} from '@react-native-community/picker';
import Loader from '../components/Spinner';
import { housekeepingpricing } from '../pricing/HouseKeepingPricing';

const PostaTaskFormHouseKeeping = (props) => {
  console.log('service id', props.route.params.s_id);
  const {user, submitRequest, loading} = props;
  const url = `${URL.WEB_URL2}`;
  const [address, setAddress] = useState('');
  const [others, setOthers] = useState('');
  const [description, setDescription] = useState('');
  const [durationPicker, setDurationPicker] = useState('Select Duration');
  const [apartmentPicker, setApartmentPicker] = useState(
    'Select Apartment Type',
  );
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(null);
  const [show, setShow] = useState(false);

  const [reqDate, setReqDate] = useState(null);
  const [reqTime, setReqTime] = useState(null);

  const [descriptionError, setDescriptionError] = useState(null);
  const [durationError, setDurationPickerError] = useState(null);
  const [addressError, setAddressError] = useState(null);
  const [othersError, setOthersError] = useState(null);
  const [dateError, setReqDateError] = useState(null);
  const [timeError, setReqTimeError] = useState(null);
  const [serviceTitle, setServiceTitle] = useState('');

  useEffect(() => {
    if (props.route.params.s_id) {
      if (props.route.params.s_id === 1) {
        setServiceTitle('Housekeeping');
      }
    }
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode === 'date') {
      setReqDate(moment(currentDate).format('Do MMMM YYYY'));
    }
    if (mode === 'time') {
      setReqTime(moment(currentDate).format('h:mm A'));
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const onDurationChange = (value) => {
    setDurationPicker(value);
  };

  const onApartmentChange = (value) => {
    setApartmentPicker(value);
  };

  const onRequestSubmit = () => {
    let dataArr = [];
    if (
      description != '' &&
      reqDate != '' &&
      reqTime != '' &&
      address != '' &&
      durationPicker != '' &&
      apartmentPicker != ''
    ) {
      dataArr.service_category = props.route.params.s_id;
      dataArr.details = description;
      dataArr.on_date = date;
      dataArr.on_time = reqTime;
      dataArr.address = address;
      dataArr.duration = durationPicker;
      dataArr.apartmenttype = apartmentPicker;
      props.navigation.navigate('Summary', {postdata: dataArr});
    } else {
      description === ''
        ? setDescriptionError('Please enter description.')
        : null;
      reqDate === '' ? setReqDateError('Please select request date.') : null;
      reqTime === '' ? setReqTimeError('Please select request time.') : null;
      address === '' ? setAddressError('Please add your address.') : null;
      durationPicker === 0
        ? setDurationPickerError('Please select duration.')
        : null;
    }
  };

  return (
    <ScrollView style={localStyles.container}>
      <Loader loading={loading} />
      {/* <Subheading
        style={{marginBottom: 20, marginHorizontal: 20, marginTop: 10}}>
        Post A Task
      </Subheading> */}
      <View
        style={{
          height: '100%',
          backgroundColor: '#FFFFFF',
          padding: 5,
        }}>
        <View style={{padding: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Subheading
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: '#000',
              }}>
              Service:
            </Subheading>
            <Subheading
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: '#000',
              }}>
              {serviceTitle}
            </Subheading>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text>Select Apartment Type</Text>
            <Picker
              selectedValue={apartmentPicker}
              style={{
                width: '50%',
              }}
              onValueChange={(itemValue, itemIndex) =>
                onApartmentChange(itemValue)
              }>
              <Picker.Item label="Choose..." value="0" />

              <Picker.Item
                value="1 Bedroom Apartment"
                label="1 Bedroom Apartment"
              />
              <Picker.Item
                value="2 Bedroom Apartment"
                label="2 Bedroom Apartment"
              />
              <Picker.Item
                value="3 Bedroom Apartment"
                label="3 Bedroom Apartment"
              />
              <Picker.Item value="3 Bedroom Duplex" label="3 Bedroom Duplex" />
              <Picker.Item
                value="4 Bedroom Apartment"
                label="4 Bedroom Apartment"
              />
              <Picker.Item value="4 Bedroom Duplex" label="4 Bedroom Duplex" />
              <Picker.Item
                value="5 Bedroom Apartment"
                label="5 Bedroom Apartment"
              />
              <Picker.Item value="5 Bedroom Duplex" label="5 Bedroom Duplex" />
              <Picker.Item
                value="6 BR Apartment or More"
                label="6 BR Apartment or More"
              />
              <Picker.Item value="Others" label="Others" />
            </Picker>
          </View>
          <Input
            placeholder="Set your other details"
            onChangeText={(value) => setOthers(value)}
            errorStyle={{color: '#FF0000'}}
            errorMessage={othersError}
            value={others}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={showDatepicker}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="calendar" size={28} color="#a795e3" />
              <Text style={{marginLeft: 10}}>Set Date</Text>
            </TouchableOpacity>
            <Subheading
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: '#000',
              }}>
              {reqDate && reqDate !== null ? reqDate : '__/__/____'}
            </Subheading>
          </View>
          {dateError ? (
            <Text style={{color: 'red', fontSize: 12}}>
              Please select request date.
            </Text>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={showTimepicker}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="clock-o" size={28} color="#a795e3" />
              <Text style={{marginLeft: 10}}>Set Time</Text>
            </TouchableOpacity>
            <Subheading
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: '#000',
              }}>
              {reqTime && reqTime !== null ? reqTime : '__:__'}
            </Subheading>
            {timeError ? (
              <Text style={{color: 'red', fontSize: 12}}>
                Please select request time.
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text>Duration (In Hour(s))</Text>
            <Picker
              selectedValue={durationPicker}
              style={{
                width: '50%',
              }}
              onValueChange={(itemValue, itemIndex) =>
                onDurationChange(itemValue)
              }>
              <Picker.Item label="Select Duration" value="0" />

              <Picker.Item value="1" label="1 Hour" />
              <Picker.Item value="2" label="2 Hour" />
              <Picker.Item value="3" label="3 Hour" />
              <Picker.Item value="4" label="4 Hour" />
              <Picker.Item value="5" label="5 Hour" />
              <Picker.Item value="6" label="6 Hour" />
              <Picker.Item value="7" label="7 Hour" />
              <Picker.Item value="8" label="8 Hour" />
            </Picker>
          </View>
          {descriptionError ? (
            <Text style={{color: 'red', fontSize: 12}}>
              Please choose duration
            </Text>
          ) : null}
          <Input
            placeholder="Your current address"
            onChangeText={(value) => setAddress(value)}
            errorStyle={{color: '#FF0000'}}
            errorMessage={addressError}
            value={address}
          />
          <Text
            style={{fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000'}}>
            Please put your message or instruction in below box:
          </Text>
          <View
            style={{
              marginTop: 10,
            }}></View>

          {/* <Divider style={localStyles.divider} /> */}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          {/* </View> */}
        </View>
        <Input
          multiline={true}
          numberOfLines={4}
          style={{
            width: '100%',
            borderWidth: 0.5,
            borderColor: 'gray',
            height: 150,
            borderBottomWidth: 1,
          }}
          placeholder="Put your message (optional)"
          onChangeText={(value) => setDescription(value)}
          errorStyle={{color: '#FF0000'}}
          errorMessage={descriptionError}
          value={description}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#a795e3', borderRadius: 25}}>
            <Text
              style={{
                ...Styles.buttonText,
                paddingHorizontal: 40,
                color: '#a795e3',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#503BB0', '#9F64C8']}
            style={{borderWidth: 1, borderRadius: 25}}>
            <TouchableOpacity onPress={() => onRequestSubmit()}>
              <Text style={{...Styles.buttonText, paddingHorizontal: 30}}>
                Save Task
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFE',
  },
  linearGradient: {
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  subheadingText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    // marginLeft: 60,
    marginTop: 10,
  },

  divider: {
    borderWidth: 0.2,
    borderColor: '#503BB0',
    marginVertical: 20,
    width: '100%',
  },

  whiteBox: {
    marginTop: 30,
    position: 'relative',
    height: 100,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
    marginHorizontal: 30,
  },
  navBarText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default PostaTaskFormHouseKeeping;
