import React, { useState } from 'react';
import { 
  Text, 
  TouchableOpacity, 
  Alert,
  Image,
  ScrollView,
  SafeAreaView, 
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
    <SafeAreaView style={Style.conteiner}>
    <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems: 'center',}}>
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
          androidVariant="nativeAndroid"
       />
      <Text style={Style.txtContent}>Please, select final date:</Text>
        <DatePicker
          date={endDate}
          textColor='#fff'
          mode='date'
          onDateChange={setEndDate}
          androidVariant="nativeAndroid"
        />
      <TouchableOpacity
      style={Style.buttonCalc}
      onPress={() => Alert.alert('Nice trip, crew!','In the selected time interval, approximately ' + Math.trunc(toMiller) + ' minutes have elapsed on the planet Miller.' )}
      >
      <Text>Calculate</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};