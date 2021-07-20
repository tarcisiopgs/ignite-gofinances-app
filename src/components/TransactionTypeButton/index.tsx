import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title, Icon} from './styles';

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  withoutMarginRight?: boolean;
  type: 'income' | 'outcome';
  selected: boolean;
  title: string;
}

const icon = {
  outcome: 'arrow-down-circle',
  income: 'arrow-up-circle',
};

const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({
  withoutMarginRight,
  selected,
  title,
  type,
  ...rest
}) => {
  return (
    <Container
      withoutMarginRight={withoutMarginRight}
      selected={selected}
      type={type}
      {...rest}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
