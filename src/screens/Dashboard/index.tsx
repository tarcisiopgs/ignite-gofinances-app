import React from 'react';

import {HighlightCard, TransactionCard} from '../../components';
import {
  TransactionsWrapper,
  TransactionsTitle,
  HightlightWrapper,
  TransactionsList,
  UserWrapper,
  LogoutIcon,
  Container,
  UserImage,
  UserData,
  UserInfo,
  UserText,
  Header,
} from './styles';

const Dashboard: React.FC = () => {
  const data = [
    {
      category: {name: 'Vendas', icon: 'dollar-sign'},
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      date: '13/04/2020',
      type: 'income',
    },
    {
      category: {name: 'Alimentação', icon: 'coffee'},
      title: 'Hamburgueria Pizzy',
      amount: '- R$ 59,00',
      date: '10/04/2020',
      type: 'outcome',
    },
  ];

  const getTransactionCardKey = (item: any, index: number) => String(index);

  const renderTransactionCard = ({item}: any) => (
    <TransactionCard data={item} />
  );

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserData>
            <UserImage
              source={{
                uri: 'https://avatars.githubusercontent.com/u/34344370?v=4',
              }}
            />
            <UserInfo>
              <UserText>Olá, </UserText>
              <UserText bold>Tarcísio</UserText>
            </UserInfo>
          </UserData>
          <LogoutIcon />
        </UserWrapper>
      </Header>
      <HightlightWrapper>
        <HighlightCard
          details="Última entrada dia 13 de abril"
          amount="R$ 17.400,00"
          title="Entradas"
          type="income"
        />
        <HighlightCard
          details="Última entrada dia 03 de abril"
          amount="R$ 1.259,00"
          title="Saídas"
          type="outcome"
        />
        <HighlightCard
          details="01 à 16 de abril"
          amount="R$ 16.141,00"
          title="Total"
          type="total"
          last
        />
      </HightlightWrapper>
      <TransactionsWrapper>
        <TransactionsTitle>Listagem</TransactionsTitle>
        <TransactionsList
          keyExtractor={getTransactionCardKey}
          renderItem={renderTransactionCard}
          data={data}
        />
      </TransactionsWrapper>
    </Container>
  );
};

export default Dashboard;
