import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Categories from '../Categories';
import {
  Container,
  Header,
  UserInfo,
  MakeProposal,
  MakeProposalText,
  Name,
  Content,
  DatePostade,
  Title,
  DescriptionContainer,
  DescriptrionTitle,
  DecriptionContent,
  DescriptionFooter,
  Suggestion,
  Price,
  CategoriesContainer,
} from './style';

const Card: React.FC = () => {
  const navigate = useNavigation();
  return (
    <Container>
      <Header>
        <UserInfo>
          <Image
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4',
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#9378ff',
            }}
          />
          <Name>J-Keven</Name>
        </UserInfo>
        <MakeProposal
          onPress={() => {
            navigate.navigate('Freela');
          }}
        >
          <Feather name="arrow-right" size={25} color="#9378ff" />
        </MakeProposal>
      </Header>
      <Content>
        <DatePostade>Posted 3 days ago</DatePostade>
        <Title>Create an application</Title>
        <DescriptionContainer>
          <DescriptrionTitle>Description</DescriptrionTitle>
          <DecriptionContent numberOfLines={4} ellipsizeMode="clip">
            We are a young startup from Paris looking for a designer who can
            help us design a tech oriented application. We are open to
            proposals. You can saw our project here: http://www.zotware.com. We
            are working with Figma and Photoshop.
          </DecriptionContent>
          <DescriptionFooter>
            <Suggestion>16 propositions</Suggestion>
            <Price>$ 2400</Price>
          </DescriptionFooter>
        </DescriptionContainer>

        <CategoriesContainer>
          <Categories>UX/UI</Categories>
          <Categories>DESIGN</Categories>
          <Categories>FIGMA</Categories>
          <Categories>PHOTOSHOP</Categories>
        </CategoriesContainer>
      </Content>
    </Container>
  );
};

export default Card;
