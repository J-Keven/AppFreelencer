import React from 'react';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Content, UserMessage, Name, LastMassega } from './styles';

interface CardMessageProps {
  color: string;
  imageUri: string;
  name: string;
  lastMessage: string;
}

const CardMessage: React.FC<CardMessageProps> = ({
  color,
  imageUri,
  name,
  lastMessage,
}) => {
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
            uri: imageUri,
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
          <Name>{name}</Name>
          <LastMassega>{lastMessage}</LastMassega>
        </UserMessage>
      </Content>
      <Feather name="chevron-right" size={28} color="#99879D" />
    </Container>
  );
};

export default CardMessage;
