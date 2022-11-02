import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllWallpapersScreen from '../screens/AllWallpapersScreen';
import SingleWallpapersScreen from '../screens/SingleWallpaperScreen';



export type RootStackNavigatorParamList = {
  AllWallpapers: undefined;
  SingleWallpaper: {
    imgUrl: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackNavigatorParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen name='AllWallpapers' component={AllWallpapersScreen}/>
        <RootStack.Screen name='SingleWallpaper' component={SingleWallpapersScreen}/>
     </RootStack.Navigator>
  )
}

export default RootNavigator