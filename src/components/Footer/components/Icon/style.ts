import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface IIconFeatherProps {
  isTheRoute: boolean;
}
export const IconFeather = styled(Feather)<IIconFeatherProps>`
  color: rgba(147, 120, 255, 0.4);

  ${props =>
    props.isTheRoute &&
    css`
      color: #9378ff;
    `}
`;
