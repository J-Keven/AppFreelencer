import React from 'react';
import { ScrollView } from 'react-native';
import Footer from '../../components/Footer';
import CardMessage from '../../components/CardMessage';

import { Container, Title, Content } from './styles';

const Messages: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Conversas</Title>
        <ScrollView>
          <Content>
            <CardMessage
              imageUri="https://avatars1.githubusercontent.com/u/51235468?s=460&u=7958b7c7d750df87d57b64955c933ac4e2e3b7f4&v=4"
              name="Ana Lindiner"
              lastMessage="I have some questions about..."
              color="#FFF"
            />
            <CardMessage
              imageUri="https://avatars1.githubusercontent.com/u/20601076?s=460&u=164dd0918a0eb4ffcd0615290fc198453c9461be&v=4"
              name="F Maik"
              lastMessage="http://www.warephase.com"
              color="#FAF9FE"
            />
            <CardMessage
              imageUri="https://avatars1.githubusercontent.com/u/38925513?s=460&u=9b6a9060ae106c1af4bb7b2cc9a57419205fdf28&v=4"
              name="Francisco Charles"
              lastMessage="Hope it will work in the week..."
              color="#FFF"
            />
            <CardMessage
              imageUri="https://avatars0.githubusercontent.com/u/37448340?s=460&u=a8479efcb8eb63d6d2ccf62490e4ef822c1f8de5&v=4"
              name="Milena Carecho"
              lastMessage="Thank you! It really shine with..."
              color="#FAF9FE"
            />
            <CardMessage
              imageUri="https://avatars3.githubusercontent.com/u/26774355?s=460&u=f89b5bfd2d9de7a5477b4e379ef62249340f89fb&v=4"
              name="Wellington R"
              lastMessage="Yes I know"
              color="#FFF"
            />
            <CardMessage
              imageUri="https://avatars2.githubusercontent.com/u/26166665?s=460&u=9db25784870740bcb1e8bbfab27523feeda6f52c&v=4"
              name="Natanael MIranda"
              lastMessage="It will be online in 2 days"
              color="#FAF9FE"
            />
          </Content>
        </ScrollView>
      </Container>
      <Footer routeName="messages" />
    </>
  );
};

export default Messages;
