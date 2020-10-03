import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Footer from '../../components/Footer';
import { Container } from './styles';
import { useAuth } from '../../hooks/Auth';

const Profile: React.FC = () => {
  const { logOut } = useAuth();
  return (
    <Container>
      <TouchableOpacity onPress={() => logOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
      <Footer routeName="dasboard" />
    </Container>
  );
};

export default Profile;
