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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ width: '100%', marginBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
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

          <Card />
          <Card />
          <Card />
        </Container>
      </ScrollView>
      <Footer routeName="dasboard" />
    </>
  );
};

export default Dashboard;
