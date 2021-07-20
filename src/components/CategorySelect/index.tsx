import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title, Icon} from './styles';

interface CategorySelectProps extends TouchableOpacityProps {
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
