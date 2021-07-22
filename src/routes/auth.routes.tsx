import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {SignIn} from '../screens';

const {Navigator, Screen} = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AuthRoutes;
