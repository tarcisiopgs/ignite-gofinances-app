import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import React from 'react';

import {Dashboard, Register, Summary} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      backBehavior="history"
      tabBarOptions={{
        tabStyle: {backgroundColor: theme.colors.shape},
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: 'beside-icon',
        labelStyle: {
          fontFamily: theme.fonts.medium,
          lineHeight: RFValue(21, 812),
          fontSize: RFValue(14, 812),
        },
      }}
      initialRouteName="Dashboard">
      <Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
        component={Dashboard}
      />
      <Screen
        name="Register"
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
        component={Register}
      />
      <Screen
        name="Summary"
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="pie-chart" size={size} color={color} />
          ),
        }}
        component={Summary}
      />
    </Navigator>
  );
};

export default AppRoutes;
