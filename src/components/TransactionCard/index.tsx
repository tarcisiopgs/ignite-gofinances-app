import React from 'react';

import {
  CategoryWrapper,
  CategoryName,
  CategoryIcon,
  Container,
  DateText,
  Amount,
  Footer,
  Title,
} from './styles';

interface CategoryProps {
  icon: string;
  name: string;
}

interface TransactionData {
  category: CategoryProps;
  amount: string;
  title: string;
  date: string;
  type: string;
  id: string;
}

interface TransactionCardProps {
  data: TransactionData;
}

const TransactionCard: React.FC<TransactionCardProps> = ({data}) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>{data.amount}</Amount>
      <Footer>
        <CategoryWrapper>
          <CategoryIcon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </CategoryWrapper>
        <DateText>{data.date}</DateText>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
