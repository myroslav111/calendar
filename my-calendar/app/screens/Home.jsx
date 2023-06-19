import { StatusBar, View } from 'react-native';
import tw from 'twrnc';
import { useAppColorScheme, useDeviceContext } from 'twrnc';

import CalendarRoutCard from '../comonents/CalendarRoutCard';
import SwitchColorThem from '../comonents/SwitchColorThem';

const Home = ({ navigation }) => {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);
  return (
    <View
      style={tw.style(
        'flex flex-col justify-center h-100% items-center dark:bg-black'
      )}
    >
      <CalendarRoutCard navigation={navigation} />
      <SwitchColorThem toggleColorScheme={toggleColorScheme} />
      <StatusBar theme='auto' />
    </View>
  );
};

export default Home;
