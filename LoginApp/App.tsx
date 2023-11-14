import React from 'react';
import LoginScreen from './src/LoginScreen';
import ShopScreen from './src/ShopScreen';
import ProductDetailScreen from './src/ProductDetailScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './src/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ShopStack = () => (
  <Stack.Navigator initialRouteName="ShopStack">
    <Stack.Screen
      name="Shop"
      component={ShopScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </Stack.Navigator>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Shop" component={ShopStack} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
