import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const SwitchColorThem = ({ toggleColorScheme }) => {
  return (
    <TouchableOpacity
      onPress={toggleColorScheme}
      style={tw.style(
        'flex justify-center h-10 w-80 items-center mt-10 dark:bg-black rounded border border-sky-500 '
      )}
    >
      <View className=''></View>
      <Text style={tw`text-black dark:text-white`}>Switch Color Scheme</Text>
    </TouchableOpacity>
  );
};

export default SwitchColorThem;
