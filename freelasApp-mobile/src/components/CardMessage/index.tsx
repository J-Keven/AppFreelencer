import React from 'react';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Content, UserMessage, Name, LastMassega } from './styles';

interface CardMessageProps {
  color: string;
}

const CardMessage: React.FC<CardMessageProps> = ({ color }) => {
  return (
    <Container
      background={color}
      onPress={() => {
        // todo
      }}
    >
      <Content>
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

        <UserMessage>
          <Name>Arlene Mckinney</Name>
          <LastMassega>I have some questions about...</LastMassega>
        </UserMessage>
      </Content>
      <Feather name="chevron-right" size={28} color="#99879D" />
    </Container>
  );
};

export default CardMessage;
