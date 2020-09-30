import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const { signup } = useAuth();
  return (
    <Container>
      <TouchableOpacity
        style={{ backgroundColor: '#e97000' }}
        onPress={() => signup()}
      >
        <Text>Sair Da Aplicação</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
