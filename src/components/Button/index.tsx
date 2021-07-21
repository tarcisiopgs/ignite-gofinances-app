import {RectButtonProps} from 'react-native-gesture-handler';
import React from 'react';

import {Container, Title} from './styles';

interface ButtonProps extends RectButtonProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress, ...rest}) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
