import React, { useCallback, useRef,useState }from 'react';
import { ImageBackground, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Feather from 'react-native-vector-icons/Feather'
import BackgroundImage from '../../assets/backgroung.png'

import { 
  Container, 
  Title, 
  Form, 
  BlurContainer,
  ButtonGoBackSignin,
  ButtonGoBackSigninText
} from './styles'

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigation();
  const InputLastNameRef = useRef<TextInput>(null);
  const InputEmailRef = useRef<TextInput>(null);
  const InputPasswordRef = useRef<TextInput>(null);

  const handleSubmitForm = useCallback((data: object) => {
    console.log(data)
  },[])

  return (
      <Container>
        <ScrollView
          keyboardShouldPersistTaps='handled' 
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
        >
        <ImageBackground 
          source={BackgroundImage} 
          style={{
            flex: 1,
            width: '100%',
            alignItems: "center",
          }
        }>

          <BlurContainer  blurType="light">    
            <Form  ref={formRef} onSubmit={handleSubmitForm}>
              <Title>Crie sua conta</Title>
              <Input 
                name="name" 
                icon="user" 
                placeholder="Nome"
                autoCapitalize="words"
                autoCorrect={false}
                autoCompleteType="off"
                returnKeyType='next'
                onSubmitEditing={() => InputLastNameRef.current?.focus()}
              />
              <Input 
                ref={InputLastNameRef}
                name="lastName" 
                icon="user" 
                placeholder="Sobrenome"
                autoCapitalize="words"
                autoCorrect={false}
                autoCompleteType="off"
                returnKeyType='next'
                onSubmitEditing={() => InputEmailRef.current?.focus()}
              />
              <Input 
                ref={InputEmailRef}
                name="email" 
                icon="mail" 
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType='next'
                onSubmitEditing={() => InputPasswordRef.current?.focus()}
              />
              <Input 
                ref={InputPasswordRef}
                name="password" 
                icon="lock" 
                placeholder="Senha"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                secureTextEntry
                returnKeyType='send'
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
          </BlurContainer>

          <Button  onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>

          <ButtonGoBackSignin onPress={() => navigate.goBack()}>
            <Feather name='arrow-left' size={22} color="#120E21"/>
            <ButtonGoBackSigninText>Voltar para signin</ButtonGoBackSigninText>
          </ButtonGoBackSignin>
        </ImageBackground>
        </ScrollView>
      </Container>
  )
}

export default SignIn;