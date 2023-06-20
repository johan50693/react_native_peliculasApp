import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/navigattion/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation/> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
