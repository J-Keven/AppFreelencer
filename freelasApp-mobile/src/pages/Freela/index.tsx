import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';
import Categories from '../../components/Categories';
import Button from '../../components/Button';
import {
  Conatiner,
  GobackButton,
  GobackButtonText,
  Header,
  HeaderUser,
  HeaderUserName,
  Content,
  DatePostade,
  ContentTitle,
  ContentDescription,
  CategoriesContainer,
  DescriptionFooter,
  Price,
  Suggestion,
  MakeProposal,
} from './styles';

const Freela: React.FC = () => {
  const navigate = useNavigation();
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Conatiner>
          <Header>
            <GobackButton
              onPress={() => {
                navigate.goBack();
              }}
            >
              <Feather name="arrow-left" size={22} color="#99879D" />
              <GobackButtonText>Voltar</GobackButtonText>
            </GobackButton>
            <HeaderUser>
              <Image
                source={{
                  uri:
                    'https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4',
                }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  borderWidth: 2,
                  borderColor: '#9378ff',
                }}
              />
              <HeaderUserName>J-Keven</HeaderUserName>
            </HeaderUser>
          </Header>

          <Content>
            <DatePostade>Posted 3 days ago</DatePostade>
            <ContentTitle>Create an application</ContentTitle>
            <ContentDescription>
              We are a young startup from Paris looking for a designer who can
              help us design a tech oriented application. We are open to
              proposals. You can saw our project here: http://www.zotware.com.
              We are working with Figma and Photoshop.
            </ContentDescription>
            <DescriptionFooter>
              <Suggestion>16 propositions </Suggestion>
              <Price>$ 2400</Price>
            </DescriptionFooter>
            <CategoriesContainer>
              <Categories>UX/UI</Categories>
              <Categories>DESIGN</Categories>
              <Categories>FIGMA</Categories>
              <Categories>PHOTOSHOP</Categories>
            </CategoriesContainer>

            <MakeProposal>
              <Button
                onPress={() => {
                  navigate.navigate('SendProposal');
                }}
              >
                Fazer um proposta
              </Button>
            </MakeProposal>
          </Content>
        </Conatiner>
      </ScrollView>
      <Footer routeName="dasboard" />
    </>
  );
};

export default Freela;
