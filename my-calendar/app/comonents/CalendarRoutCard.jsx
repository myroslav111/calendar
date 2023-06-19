import { Image, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const CalendarRoutCard = ({ navigation }) => {
  return (
    <View
      style={tw.style(
        'flex justify-center h-30 w-80 items-center mt-10 dark:bg-black '
      )}
    >
      {/* <TouchableOpacity onPress={() => Alert.alert('alert', 'hello')}> */}
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <Image
          source={require('../../assets/calendar-icon-png-4125.webp')}
          style={{ width: 80, height: 80 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarRoutCard;
