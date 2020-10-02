import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #faf9fe;
  /* justify-content: center;
  align-items: center; */
  padding: 0 20px;
`;

export const Header = styled.View`
  height: 132px;
  align-items: flex-start;
`;
export const Title = styled.Text`
  font-family: 'RedHatDisplay-Bold';
  margin-top: 58px;
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
`;
export const Input = styled.TextInput`
  flex: 1;
  font-family: 'PublicSans-Medium';
  font-size: 18px;
`;
