import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () => {
  const { user, isLoaded } = useAuth();
  if (isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#9378FF" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
