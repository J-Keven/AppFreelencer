import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Freela from '../pages/Freela';
import SendProposal from '../pages/SendProposal';
import Profile from '../pages/Profile';

const App = createStackNavigator();
const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Dashboard" headerMode="none">
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Freela" component={Freela} />
      <App.Screen name="SendProposal" component={SendProposal} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
