import React from 'react';
import Feacther from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import {
  Container,
  Header,
  Input,
  Search,
  Title,
  Filter,
  FilterText,
} from './styles';
import { useAuth } from '../../hooks/Auth';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>Search</Title>
          <Search>
            <Input
              autoCorrect={false}
              autoCapitalize="words"
              autoCompleteType="off"
            />
            <Feacther name="search" size={20} />
          </Search>

          <Filter>
            <Feacther name="filter" size={24} color="#99879D" />
            <FilterText>Filtros</FilterText>
          </Filter>
        </Header>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ width: '100%', marginBottom: 90, marginTop: 25 }}
          showsVerticalScrollIndicator={false}
        >
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </Container>
      <Footer routeName="dasboard" />
    </>
  );
};

export default Dashboard;
