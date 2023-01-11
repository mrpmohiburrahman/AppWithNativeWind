/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import FictionalComponent from './components/Fictional.component';
import {FictionalData} from './data/Fictional.data';
import FictionalNavigation from './navigation/Fictional.navigation';
import FictionalScreen from './screens/Fictional.screen';
import {FictionalUtils} from './utils/Fictional.utils';

const App = () => {
  FictionalComponent;
  FictionalData;
  FictionalNavigation;
  FictionalUtils;
  FictionalScreen;
  return (
    <View className={'flex-1 items-center justify-center'}>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;
