import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface IIconFeatherProps {
  isTheRoute: boolean;
}

export const Container = styled.View`
  bottom: 0;
  width: 100%;
  height: 88px;
  position: absolute;
  background-color: #fffff9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 22px;
`;

export const IconFeather = styled(Feather)<IIconFeatherProps>`
  color: rgba(147, 120, 255, 0.4);

  ${props =>
    props.isTheRoute &&
    css`
      color: #9378ff;
    `}
`;
