import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* padding: 20px; */
`;

export const Header = styled.View`
  padding: 20px;
`;
export const GoBackIcon = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;
export const GoBackText = styled.Text`
  color: #99879d;
  font-family: 'RedHatDisplay-Medium';
  font-size: 18px;
  line-height: 24px;
  margin-left: 8px;
`;
export const HeaderContent = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
`;
export const HeaderContentText = styled.Text`
  margin-left: 8px;
  font-family: 'RedHatDisplay-Bold';
  font-size: 25px;
  line-height: 33px;
  color: #120e21;
`;

export const Content = styled.View`
  margin-top: 48px;
  padding: 0 20px;
  /* align-items: center; */
`;
export const ContentHeader = styled.Text`
  font-family: 'RedHatDisplay-Bold';
  font-size: 25px;
  line-height: 33px;
  color: #120e21;
`;
export const ContentBody = styled.View`
  align-items: center;
  margin-top: 16px;
`;
