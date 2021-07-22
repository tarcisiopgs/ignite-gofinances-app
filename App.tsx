import {ThemeProvider} from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import React from 'react';

import {AuthProvider, useAuth} from './src/hooks';
import {theme} from './src/global';
import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const {userLoading} = useAuth();

  if (!fontsLoaded || userLoading) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    );
  }
};

export default App;
