import React from 'react';


import WeatherScreen from './components/WeatherScreen'
import ZipCodeScreen from './components/ZipCodeScreen'
import Weather from './components/Weather'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
},{
  initialRouteName: 'Weather',
  initialRouteParams: {zipCode:'20000'}
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}