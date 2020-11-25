import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from './components/Icon';
import { Container } from './style';

interface FooterProps {
  routeName: 'messages' | 'grid' | 'dasboard' | 'profile';
}
const Footer: React.FC<FooterProps> = ({ routeName }) => {
  const navigate = useNavigation();
  return (
    <Container>
      <Icon
        iconName="grid"
        isTheRoute={routeName === 'grid'}
        onPress={() => {}}
      />
      <Icon
        iconName="search"
        isTheRoute={routeName === 'dasboard'}
        onPress={() => {
          navigate.navigate('Dashboard');
        }}
      />
      <Icon
        iconName="message-square"
        isTheRoute={routeName === 'messages'}
        onPress={() => {
          navigate.navigate('Messages');
        }}
      />
      <Icon
        iconName="user"
        isTheRoute={routeName === 'profile'}
        onPress={() => {
          navigate.navigate('Profile');
        }}
      />
    </Container>
  );
};
export default Footer;
