import {RectButtonProps} from 'react-native-gesture-handler';
import React from 'react';

import {Container, Button, Title, Icon} from './styles';

interface TransactionTypeButtonProps extends RectButtonProps {
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
    <Container selected={selected} withoutMarginRight={withoutMarginRight}>
      <Button selected={selected} type={type} {...rest}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
};

export default TransactionTypeButton;
