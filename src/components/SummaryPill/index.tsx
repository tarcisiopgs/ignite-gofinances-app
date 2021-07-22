import React from 'react';

import {
  CategoryAmount,
  CategoryColor,
  CategoryInfo,
  CategoryName,
  Container,
} from './styles';

interface SummaryPillProps {
  amount: string;
  color: string;
  title: string;
}

const SummaryPill: React.FC<SummaryPillProps> = ({color, amount, title}) => {
  return (
    <Container>
      <CategoryColor color={color} />
      <CategoryInfo>
        <CategoryName>{title}</CategoryName>
        <CategoryAmount>{amount}</CategoryAmount>
      </CategoryInfo>
    </Container>
  );
};

export default SummaryPill;
