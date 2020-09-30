import React, { useCallback, useRef, useState, useContext } from 'react';
import { ImageBackground, TextInput, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';
import formatErrorsValidate from '../../utils/formatErrorValidate';
import backgroundImage from '../../assets/backgroung.png';

import {
  Container,
  Title,
  Form,
  BlurContainer,
  ButtonGoBackSignin,
  ButtonGoBackSigninText,
} from './styles';

interface UserCredentils {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigation();
  const InputEmailRef = useRef<TextInput>(null);
  const InputPasswordRef = useRef<TextInput>(null);

  const { signin } = useAuth();
  const handleSubmitForm = useCallback(
    async (data: UserCredentils) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Email Inválido')
            .required('Email obrigatório'),
          password: Yup.string().required('Password obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signin(data);

        // navigate.navigate()
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errorFormatted = formatErrorsValidate(error);
          formRef.current?.setErrors(errorFormatted);
        } else {
          Alert.alert(
            'Erro ao fazer login',
            'Ocorreu um erro ao fazer seu login, por faver cheque suas credencias e tente novamenet',
          );
        }
      }
    },
    [signin],
  );

  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={backgroundImage}
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <BlurContainer blurType="light" blurAmount={25}>
            <Form ref={formRef} onSubmit={handleSubmitForm}>
              <Title>Faça seu login</Title>
              <Input
                ref={InputEmailRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
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
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
          </BlurContainer>
          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
          <ButtonGoBackSignin onPress={() => navigate.navigate('SignUp')}>
            <ButtonGoBackSigninText>Criar uma conta</ButtonGoBackSigninText>
            <Feather name="log-out" size={22} color="#120E21" />
          </ButtonGoBackSignin>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
};

export default SignIn;
