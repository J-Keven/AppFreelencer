import React from 'react';
import Icon from './components/Icon';
import { Container } from './style';

interface FooterProps {
  routeName: 'messages' | 'grid' | 'dasboard' | 'profile';
}
const Footer: React.FC<FooterProps> = ({ routeName }) => {
  return (
    <Container>
      <Icon iconName="grid" isTheRoute={routeName === 'grid'} />
      <Icon iconName="search" isTheRoute={routeName === 'dasboard'} />
      <Icon iconName="message-square" isTheRoute={routeName === 'messages'} />
      <Icon iconName="user" isTheRoute={routeName === 'profile'} />
    </Container>
  );
};
export default Footer;
