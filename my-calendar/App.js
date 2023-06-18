import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import Home from './app/screens/Home.jsx';

const App = () => {
  return (
    <View>
      <Home />
      <StatusBar theme='auto' />
    </View>
  );
};

export default App;
