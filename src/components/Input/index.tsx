import {useTheme} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import React from 'react';

import {Container} from './styles';

const Input: React.FC<TextInputProps> = ({...rest}) => {
  const theme = useTheme();

  return <Container placeholderTextColor={theme.colors.text} {...rest} />;
};

export default Input;
