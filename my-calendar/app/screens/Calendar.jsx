import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const Calendar = () => {
  return (
    <View
      style={tw.style(
        'flex flex-col justify-center h-100% items-center dark:bg-black'
      )}
    >
      <Text style={tw`text-black dark:text-white`}>Calendar</Text>
    </View>
  );
};

export default Calendar;
