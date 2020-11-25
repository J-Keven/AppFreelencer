import React from 'react';
import { ScrollView } from 'react-native';
import Footer from '../../components/Footer';
import CardMessage from '../../components/CardMessage';

import { Container, Title, Content } from './styles';

const Messages: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Conversas</Title>
        <ScrollView>
          <Content>
            <CardMessage color="#FFF" />
            <CardMessage color="#FAF9FE" />
            <CardMessage color="#FFF" />
            <CardMessage color="#FAF9FE" />
            <CardMessage color="#FFF" />
            <CardMessage color="#FAF9FE" />
            <CardMessage color="#FFF" />
          </Content>
        </ScrollView>
      </Container>
      <Footer routeName="messages" />
    </>
  );
};

export default Messages;
