import React, {useState} from 'react';
import { View, Text, Image, DateInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Style from './style/css.js';

export default function App1(){

  const [startdate, setstartDate] = useState(new Date())
  const [finaldate, setfinalDate] = useState(new Date())

  return (
    <View style={Style.conteiner}>
      <Text style={Style.txtHeader}>Miller Calculator</Text>
      <Text style={Style.txtContent}>Please, select start date:</Text>
        <DatePicker
          date={startdate}
          mode="date"
          textColor='#fff'
       />
      <Text style={Style.txtContent}>Please, select final date:</Text>
        <DatePicker
          date={finaldate}
          textColor='#fff'
          mode="date"
        />
      <Button
      title='Calculate'
      color='#fff'
      />
      <Text style={Style.txtResult}>The final result is:</Text>
    </View>
  );
};