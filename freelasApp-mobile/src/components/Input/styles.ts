import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
interface ContainerProps {
  onFocus: boolean;
} 

interface IconProps {
  onFocus: boolean;
} 
export const Container = styled.View<ContainerProps>`
  width: 100%; 
  height: 60px;
  padding: 0 15px;
  background: #FBEEFF;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  border-top-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: #FBEEFF;

  ${props => props.onFocus && css`
    border-color: #9378FF;
  `}
`

export const Icon = styled(Feather)<IconProps>`
  color: #99879D;
  margin-right: 10px;

  ${props => props.onFocus && css`
    color: #9378FF;
  `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'PublicSans-Regular';
  font-size: 16px;
`