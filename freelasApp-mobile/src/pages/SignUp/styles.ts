import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur'
import { Form as FormUnform} from '@unform/mobile'
export const Container = styled.View`
  flex: 1;
`;

export const Form = styled(FormUnform)`
  width: 90%;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-width: 2px;
  border-color: #FBEAFF;
  border-radius: 8px;
  padding-bottom: 25px;

`

export const Title = styled.Text`
  font-family: "RedHatDisplay-Medium";
  font-size: 27px;
  color: #120E21;
  margin-top: 20px;
`

export const BlurContainer = styled(BlurView)`
  margin-top: 15%;
`

export const ButtonGoBackSignin = styled.TouchableOpacity`
  background: transparent;
  margin-top: 60px;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  margin-bottom: 11%
`
  
export const  ButtonGoBackSigninText = styled.Text`
  color: #9378FF;
  margin-left: 10px;
  font-family: "PublicSans-Medium";
  font-size: 18px;
  color: #120E21;
`