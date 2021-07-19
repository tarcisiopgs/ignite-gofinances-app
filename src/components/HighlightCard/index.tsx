import React from 'react';

import {
  AmountDetails,
  Container,
  Header,
  Footer,
  Amount,
  Title,
  Icon,
} from './styles';

interface HighlightCardProps {
  type: 'income' | 'outcome' | 'total';
  details: string;
  last?: boolean;
  amount: string;
  title: string;
}

const icon = {
  outcome: 'arrow-down-circle',
  income: 'arrow-up-circle',
  total: 'dollar-sign',
};

const HighlightCard: React.FC<HighlightCardProps> = ({
  details,
  amount,
  title,
  last,
  type,
}) => {
  return (
    <Container last={last} type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <AmountDetails type={type}>{details}</AmountDetails>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
