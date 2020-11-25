import React from 'react';
import { Container, Input } from './styles';

const InputMessage: React.FC = () => {
  return (
    <Container>
      <Input
        placeholder="Mensagem"
        autoCapitalize="sentences"
        scrollEnabled
        multiline
      />
    </Container>
  );
};

export default InputMessage;
