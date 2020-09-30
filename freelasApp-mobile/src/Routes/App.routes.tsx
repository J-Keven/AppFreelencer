import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();
const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home" headerMode="none">
      <App.Screen name="Home" component={Dashboard} />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
