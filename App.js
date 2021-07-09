import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  Alert, 
 } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Style from './style/css.js';

const moment = extendMoment(Moment);

export default function App1(){
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const dayRange = moment.range(startDate, endDate);
  const timeEarth = ('61362');
  const timeMiller = ('60');

  return (
    <View style={Style.conteiner}>
      <Text style={Style.txtHeader}>Miller Calculator</Text>
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
      />
    </View>
  );
};