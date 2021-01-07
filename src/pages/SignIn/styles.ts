import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';
import { Form as FormUnform } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled(FormUnform)`
  width: 90%;
  align-items: center;
  padding: 15px;
  background: rgba(250, 250, 250, 0.3);
  border-width: 2px;
  border-color: #939af9;
  border-radius: 8px;
  padding-bottom: 25px;
`;

export const Title = styled.Text`
  font-family: 'RedHatDisplay-Medium';
  font-size: 27px;
  color: #120e21;
  margin-top: 34px;
  margin-bottom: 20px;
`;

export const BlurContainer = styled(BlurView)`
  margin-top: 20%;
  margin-bottom: 40px;
`;

export const ButtonGoBackSignin = styled.TouchableOpacity`
  background: transparent;
  margin-top: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40%;
`;

export const ButtonGoBackSigninText = styled.Text`
  color: #9378ff;
  margin-right: 10px;
  font-family: 'PublicSans-Medium';
  font-size: 18px;
  color: #120e21;
`;
