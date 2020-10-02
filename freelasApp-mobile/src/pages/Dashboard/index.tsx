import React from 'react';
import Feacther from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';
import { Container, Header, Input, Search, Title } from './styles';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const { signup } = useAuth();
  return (
    <Container>
      <Header>
        <Title>Search</Title>
      </Header>
      <Search>
        <Input
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
        />
        <Feacther name="search" size={20} />
      </Search>

      <Card />
    </Container>
  );
};

export default Dashboard;
