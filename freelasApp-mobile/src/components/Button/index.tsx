import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler' 
import { Container, Text } from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children,...rest }) => {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  )
} 

export default Button;