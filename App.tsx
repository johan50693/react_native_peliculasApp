import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/navigattion/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const Appstate = ({children}: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Appstate>
        <Navigation/>
      </Appstate>
    </NavigationContainer>
  );
};

export default App;
