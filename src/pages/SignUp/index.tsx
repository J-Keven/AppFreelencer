import React, { useCallback, useRef } from 'react';
import {
  ImageBackground,
  TextInput,
  ScrollView,
  Alert,
  NativeAppEventEmitter,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';
import formatErrorValidate from '../../utils/formatErrorValidate';
import BackgroundImage from '../../assets/backgroung.png';

import {
  Container,
  Title,
  Form,
  BlurContainer,
  ButtonGoBackSignin,
  ButtonGoBackSigninText,
} from './styles';

interface UserFomrData {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigation();
  const InputLastNameRef = useRef<TextInput>(null);
  const InputEmailRef = useRef<TextInput>(null);
  const InputPasswordRef = useRef<TextInput>(null);
  const { createAccount } = useAuth();
  const handleSubmitForm = useCallback(
    async (data: UserFomrData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          firstName: Yup.string().required('O nome é obrigatório'),
          lastName: Yup.string().required('O Sobrenome é obrigatório'),
          email: Yup.string()
            .email('E-mail inválido')
            .required('O E-mail é obrigatório'),
          password: Yup.string().min(
            6,
            'A senha tem que ter no minimo de 6 caracteres',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        await createAccount(data);
        navigate.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errorFormatted = formatErrorValidate(error);
          formRef.current?.setErrors(errorFormatted);
        } else {
          Alert.alert(
            'Erro ao Criar a Conta.',
            'Ocorreu um erro ao criar sua conta, tente novamente.',
          );
        }
      }
    },
    [createAccount],
  );

  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={BackgroundImage}
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <BlurContainer blurType="light" blurAmount={20}>
            <Form ref={formRef} onSubmit={handleSubmitForm}>
              <Title>Crie sua conta</Title>

              <Input
                name="firstName"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                autoCorrect={false}
                autoCompleteType="off"
                returnKeyType="next"
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
                returnKeyType="next"
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

          <ButtonGoBackSignin onPress={() => navigate.goBack()}>
            <Feather name="arrow-left" size={22} color="#120E21" />
            <ButtonGoBackSigninText>Voltar para signin</ButtonGoBackSigninText>
          </ButtonGoBackSignin>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
};

export default SignIn;
