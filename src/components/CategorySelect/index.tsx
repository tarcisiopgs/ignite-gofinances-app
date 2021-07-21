import {RectButtonProps} from 'react-native-gesture-handler';
import React from 'react';

import {Container, Title, Icon} from './styles';

interface CategorySelectProps extends RectButtonProps {
  title: string;
}

const CategorySelect: React.FC<CategorySelectProps> = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelect;
