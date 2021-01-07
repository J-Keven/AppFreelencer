import styled from 'styled-components/native';

interface ContainerProps {
  background: string | '#f0f0f0';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 103px;
  background: ${props => props.background};
  padding: 24px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserMessage = styled.View`
  margin-left: 16px;
`;
export const Name = styled.Text`
  font-size: 20px;
  line-height: 26px;
  font-family: 'RedHatDisplay-Bold';
  color: #120e21;
`;
export const LastMassega = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #99879d;
  font-family: 'PublicSans-Regular';
`;
