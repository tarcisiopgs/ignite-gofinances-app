import {ActivityIndicator, Alert, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import React, {useCallback, useState} from 'react';
import {useTheme} from 'styled-components';

import {useAuth} from '../../hooks';
import {
  SecondaryContainer,
  PrimaryContainer,
  WelcomeSubitle,
  ButtonsContent,
  ButtonDivider,
  WelcomeTitle,
  GoogleIcon,
  ButtonText,
  Container,
  AppleIcon,
  LogoIcon,
  Button,
} from './styles';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {signInWithGoogle, signInWithApple} = useAuth();
  const theme = useTheme();

  const handleSignInWithGoogle = useCallback(async () => {
    try {
      setLoading(true);

      await signInWithGoogle();
    } catch (e) {
      console.log(e);

      Alert.alert('Não foi possível realizar sua autenticação com o Google');

      setLoading(false);
    }
  }, [signInWithGoogle, setLoading]);

  const handleSignInWithApple = useCallback(async () => {
    try {
      setLoading(true);

      await signInWithApple();
    } catch (e) {
      console.log(e);

      Alert.alert('Não foi possível realizar sua autenticação com a Apple');

      setLoading(false);
    }
  }, [signInWithApple, setLoading]);

  return (
    <Container>
      <PrimaryContainer>
        <LogoIcon />
        <WelcomeTitle>
          {'Controle suas\nfinanças de forma\nmuito simples'}
        </WelcomeTitle>
        <WelcomeSubitle>
          {'Faça seu login com\numa das contas abaixo'}
        </WelcomeSubitle>
      </PrimaryContainer>
      <SecondaryContainer>
        <ButtonsContent>
          <Button onPress={handleSignInWithGoogle}>
            <GoogleIcon />
            <ButtonDivider />
            <ButtonText>Entrar com Google</ButtonText>
          </Button>
          {Platform.OS === 'ios' && (
            <Button onPress={handleSignInWithApple}>
              <AppleIcon />
              <ButtonDivider />
              <ButtonText>Entrar com Apple</ButtonText>
            </Button>
          )}
        </ButtonsContent>
        {loading && (
          <ActivityIndicator
            style={{marginTop: RFValue(80, 812)}}
            size="large"
            color={theme.colors.primary}
          />
        )}
      </SecondaryContainer>
    </Container>
  );
};

export default SignIn;
