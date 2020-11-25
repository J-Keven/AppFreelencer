import React from 'react';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import InputMessage from '../../components/InputMessage';
import {
  Container,
  Header,
  GoBackIcon,
  GoBackText,
  HeaderContent,
  HeaderContentText,
  Content,
  ContentHeader,
  ContentBody,
} from './styles';

const SendProposal: React.FC = () => {
  return (
    <Container>
      <Header>
        <GoBackIcon
          onPress={() => {
            // to-do
          }}
        >
          <Feather name="arrow-left" size={22} color="#99879D" />
          <GoBackText>Voltar</GoBackText>
        </GoBackIcon>
        <HeaderContent>
          <Image
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4',
            }}
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              borderWidth: 2,
              borderColor: '#9378ff',
            }}
          />
          <HeaderContentText>J-keven</HeaderContentText>
        </HeaderContent>
      </Header>
      <Content>
        <ContentHeader>Faça uma Proposta</ContentHeader>
        <ContentBody>
          <InputMessage />
          <Button>Enviar</Button>
        </ContentBody>
      </Content>
      <Footer routeName="dasboard" />
    </Container>
  );
};

export default SendProposal;
