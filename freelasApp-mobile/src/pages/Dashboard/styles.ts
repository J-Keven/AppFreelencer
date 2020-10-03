import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #faf9fe;
  padding: 0 20px;
`;

export const Header = styled.View`
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: 'RedHatDisplay-Bold';
  margin-top: 40px;
  font-size: 40px;
  color: #120e21;
`;

export const Search = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #fbeeff;
  box-shadow: 2px 2px 2px black;
  margin-top: 22px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: 'PublicSans-Medium';
  font-size: 18px;
`;

export const Filter = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 25px;
`;

export const FilterText = styled.Text`
  font-family: 'PublicSans-Regular';
  font-size: 16px;
  line-height: 19px;
  color: #99879d;
  margin-left: 8px;
`;
