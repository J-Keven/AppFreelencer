import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface ContainerProps {
  onFocus: boolean;
  error: boolean;
}

interface IconProps {
  onFocus: boolean;
  onFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  background: #fbeef0;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  border-width: 2px;
  border-color: #fbeef0;

  ${props =>
    props.error &&
    css`
      border-color: #e53030;
    `}

  ${props =>
    props.onFocus &&
    css`
      border-color: #9378ff;
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  color: #99879d;
  margin-right: 10px;

  ${props =>
    props.onFocus &&
    css`
      color: #9378ff;
    `}

  ${props =>
    props.onFilled &&
    css`
      color: #9378ff;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'PublicSans-Regular';
  font-size: 16px;
`;
