import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  Alert,
  Image, 
 } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Style from './style/css.js';

const moment = extendMoment(Moment);

export default function MainCalculator(){
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const difInDate = endDate.getTime() - startDate.getTime();
  const convertToDays = difInDate / (1000 * 3600 * 24);
  const convertToHours = convertToDays * 24;
  const toMiller = (convertToHours * 60) / 61362;
  
  return (
    <View style={Style.conteiner}>
       <Image
        source={require('./img/millerlogo.png')}
        style={Style.logoStyle}
      />
      <Text style={Style.txtContent}>Please, select start date:</Text>
        <DatePicker
          date={startDate}
          mode='date'
          textColor='#fff'
          onDateChange={setStartDate}
       />
      <Text style={Style.txtContent}>Please, select final date:</Text>
        <DatePicker
          date={endDate}
          textColor='#fff'
          mode='date'
          onDateChange={setEndDate}
        />
      <Button
      title='Calculate'
      color='#fff'
      onPress={() => Alert.alert('In the selected time interval, approximately ' + Math.trunc(toMiller) + ' minutes have elapsed on the planet Miller.' )}
      />
    </View>
  );
};