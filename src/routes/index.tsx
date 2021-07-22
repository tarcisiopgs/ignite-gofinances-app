import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useAuth} from '../hooks';

const Routes = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
