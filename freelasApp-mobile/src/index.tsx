import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './Routes';
import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#9378FF" />
      <View style={{ backgroundColor: '#FAF9FE', flex: 1 }}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </View>
    </>
  );
};

export default App;
