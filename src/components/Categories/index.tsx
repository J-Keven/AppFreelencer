import React from 'react';
import { TextProps } from 'react-native';
import { Container, Title } from './style';

interface CategoriesProps extends TextProps {
  children: string;
}

const Categories: React.FC<CategoriesProps> = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

export default Categories;
