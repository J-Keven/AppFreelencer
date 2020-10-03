import styled from 'styled-components/native';

export const Conatiner = styled.View`
  flex: 1;
  background-color: #faf7fe;
`;
export const Header = styled.View`
  background-color: #fffff9;
  padding: 0 16px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const GobackButton = styled.TouchableOpacity`
  margin-top: 30px;
  align-items: center;
  flex-direction: row;
`;

export const GobackButtonText = styled.Text`
  font-family: 'RedHatDisplay-Medium';
  font-size: 18px;
  line-height: 24px;
  color: #99879d;
  margin-left: 8px;
`;

export const HeaderUser = styled.View`
  margin-top: 35px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 31px;
`;
export const HeaderUserName = styled.Text`
  margin-left: 10px;
  font-family: 'RedHatDisplay-Bold';
  font-size: 25px;
  line-height: 33px;
  color: #120e21;
`;
export const Content = styled.View`
  padding: 0 16px;
  margin-bottom: 30px;
`;
export const DatePostade = styled.Text`
  margin-top: 10px;
  font-family: 'PublicSans-Regular';
  font-size: 12.8px;
  line-height: 20px;
  color: #99879d;
`;

export const ContentTitle = styled.Text`
  margin-top: 5px;
  font-family: 'RedHatDisplay-Bold';
  font-size: 25px;
  line-height: 33px;
  color: #120e21;
`;
export const ContentDescription = styled.Text`
  margin-top: 16px;
  font-family: 'PublicSans-Regular';
  font-size: 16px;
  line-height: 26px;
  color: #99879d;
`;
export const DescriptionFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Suggestion = styled.Text`
  font-family: 'PublicSans-Regular';
  font-size: 12.8px;
  line-height: 20px;
  color: rgba(153, 135, 157, 0.64);
`;
export const Price = styled.Text`
  font-family: 'PublicSans-Bold';
  font-size: 16px;
  line-height: 26px;
  color: #9378ff;
`;
export const CategoriesContainer = styled.View`
  padding: 0 16px;
  flex-direction: row;
  margin: 18px 0;
`;

export const MakeProposal = styled.View`
  padding: 0 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
`;
