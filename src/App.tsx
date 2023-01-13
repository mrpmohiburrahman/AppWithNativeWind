import FictionalComponent from '@components/Fictional.component';
import {FictionalData} from '@data/Fictional.data';
import FictionalNavigation from '@navigation/Fictional.navigation';
import FictionalScreen from '@screens/Fictional.screen';
import {FictionalUtils} from '@utils/Fictional.utils';
import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  FictionalComponent;
  FictionalData;
  FictionalNavigation;
  FictionalScreen;
  FictionalUtils;
  return (
    <View className={'flex-1 items-center justify-center'}>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;
