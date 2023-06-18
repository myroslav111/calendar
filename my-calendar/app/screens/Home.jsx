import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import tw from 'twrnc';
import { useAppColorScheme, useDeviceContext } from 'twrnc';

import CalendarRoutCard from '../comonent/CalendarRoutCard';

const Home = () => {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);
  return (
    <View
      style={tw.style(
        'flex flex-col justify-center h-100% items-center dark:bg-black'
      )}
    >
      <CalendarRoutCard />
      <TouchableOpacity
        onPress={toggleColorScheme}
        style={tw.style(
          'flex justify-center h-10 w-80 items-center mt-10 dark:bg-black rounded border border-sky-500 '
        )}
      >
        <View className=''></View>
        <Text style={tw`text-black dark:text-white`}>Switch Color Scheme</Text>
      </TouchableOpacity>
      <StatusBar theme='auto' />
    </View>
  );
};

export default Home;
