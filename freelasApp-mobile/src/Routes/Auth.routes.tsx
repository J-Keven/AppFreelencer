import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Auth = createStackNavigator();
const AuthRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator 
        initialRouteName="SignIn" 
        headerMode="none"
      >
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
      </Auth.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes