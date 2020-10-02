import React from 'react';
import { Image, View } from 'react-native';
import Categories from '../Categories';
import {
  Container,
  Header,
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
} from './style';

const Card: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4',
          }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <Name>J-Keven</Name>
      </Header>
      <Content>
        <DatePostade>Posted 3 days ago</DatePostade>
        <Title>Title of the project</Title>
        <DescriptionContainer>
          <DescriptrionTitle>Description</DescriptrionTitle>
          <DecriptionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            amet nunc felis duis tortor fringilla eget. Turpis dui, mauris
            tempus ultricies.
          </DecriptionContent>
          <DescriptionFooter>
            <Suggestion>16 propositions</Suggestion>
            <Price>$ 2400</Price>
          </DescriptionFooter>
        </DescriptionContainer>

        <View>
          <Categories>UX/UI</Categories>
          <Categories>DESIGN</Categories>
          <Categories>FIGMA</Categories>
          <Categories>PHOTOSHOP</Categories>
        </View>
      </Content>
    </Container>
  );
};

export default Card;
