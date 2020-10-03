import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  margin-bottom: 50px;
  margin-top: 10px;
  border-radius: 8px;
  /* padding: 16px; */
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 73.83px;
  background-color: #efedf0;
  padding: 0 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const Name = styled.Text`
  margin-left: 10px;
  font-family: 'RedHatDisplay-Medium';
  font-size: 20px;
  line-height: 26px;
  color: #120e21;
`;
export const Content = styled.View`
  margin-top: 10px;
  padding: 0 16px;
`;
export const DatePostade = styled.Text`
  font-family: 'PublicSans-Regular';
  font-size: 12.8px;
  line-height: 20;
  color: #99879d;
`;
export const Title = styled.Text`
  margin-top: 16px;
  font-family: 'RedHatDisplay-Bold';
  font-size: 25px;
  line-height: 33px;
  color: #120e21;
`;
export const DescriptionContainer = styled.View``;
export const DescriptrionTitle = styled.Text`
  margin-top: 16px;
  font-family: 'RedHatDisplay-Medium';
  font-size: 20px;
  line-height: 26px;
  color: #120e21;
`;
export const DecriptionContent = styled.Text`
  margin-top: 5px;
  font-family: 'PublicSans-Regular';
  font-size: 16px;
  line-height: 23px;
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
  flex-direction: row;
  margin: 18px 0;
`;
