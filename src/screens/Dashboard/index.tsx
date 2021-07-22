import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Alert, ActivityIndicator} from 'react-native';
import locale from 'date-fns/locale/pt-BR';
import {useTheme} from 'styled-components';
import {format, parseISO} from 'date-fns';
import currency from 'currency.js';
import lodash from 'lodash';

import {HighlightCard, TransactionCard} from '../../components';
import {categories} from '../../utils';
import {
  TransactionsWrapper,
  TransactionsTitle,
  HightlightWrapper,
  TransactionsList,
  LoadingContainer,
  LogoutButton,
  UserWrapper,
  LogoutIcon,
  Container,
  UserImage,
  UserData,
  UserInfo,
  UserText,
  Header,
} from './styles';

interface CategoryProps {
  icon: string;
  name: string;
}

interface TransactionData {
  category: CategoryProps;
  amount: string;
  title: string;
  type: string;
  date: string;
  id: string;
}

interface HighlightData {
  details: string;
  amount: string;
}

const storageKey = '@gofinances:transactions';

const Dashboard: React.FC = () => {
  const [incomeHighlightData, setIncomeHighlightData] = useState<HighlightData>(
    {
      amount: 'R$ 0,00',
      details: '',
    },
  );
  const [totalHighlightData, setTotalHighlightData] = useState<HighlightData>({
    amount: 'R$ 0,00',
    details: '',
  });
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [outcomeHighlightData, setOutcomeHighlightData] =
    useState<HighlightData>({
      amount: 'R$ 0,00',
      details: '',
    });
  const [data, setData] = useState<TransactionData[]>([]);
  const theme = useTheme();

  const getTransactionCardKey = (item: TransactionData, index: number) =>
    String(index);

  const renderTransactionCard = ({item}: {item: TransactionData}) => (
    <TransactionCard data={item} />
  );

  const loadTransactions = async () => {
    try {
      const currentData = await AsyncStorage.getItem(storageKey);
      const currentDataFormatted = currentData ? JSON.parse(currentData) : [];
      const finalIncomeHighlightData = lodash.filter(
        currentDataFormatted,
        (item) => item.transactionType === 'income',
      );
      const finalOutcomeHighlightData = lodash.filter(
        currentDataFormatted,
        (item) => item.transactionType === 'outcome',
      );

      setIncomeHighlightData(() => {
        const lastTransaction = lodash.maxBy(finalIncomeHighlightData, 'date');
        const amountFormatted = currency(
          lodash.sumBy(finalIncomeHighlightData, 'amount'),
          {
            decimal: ',',
          },
        ).format({symbol: 'R$ '});

        return {
          amount: amountFormatted,
          details: `Última entrada dia ${format(
            parseISO(lastTransaction.date),
            "dd 'de' MMMM",
            {locale},
          )}`,
        };
      });

      setOutcomeHighlightData(() => {
        const lastTransaction = lodash.maxBy(finalOutcomeHighlightData, 'date');
        const amountFormatted = currency(
          lodash.sumBy(finalOutcomeHighlightData, 'amount'),
          {
            decimal: ',',
          },
        ).format({symbol: 'R$ '});

        return {
          amount: amountFormatted,
          details: `Última saída dia ${format(
            parseISO(lastTransaction.date),
            "dd 'de' MMMM",
            {locale},
          )}`,
        };
      });

      setTotalHighlightData(() => {
        const amountFormatted = currency(
          lodash.sumBy(finalIncomeHighlightData, 'amount') -
            lodash.sumBy(finalOutcomeHighlightData, 'amount'),
          {
            decimal: ',',
          },
        ).format({symbol: 'R$ '});
        const firstTransaction: any = lodash.minBy(
          currentDataFormatted,
          'date',
        );
        const lastTransaction: any = lodash.maxBy(currentDataFormatted, 'date');

        return {
          amount: amountFormatted,
          details: `De ${format(
            parseISO(firstTransaction.date),
            "dd 'de' MMMM",
            {locale},
          )} à ${format(parseISO(lastTransaction.date), "dd 'de' MMMM", {
            locale,
          })}`,
        };
      });

      setData(
        lodash.map(currentDataFormatted, (item: any) => {
          const amountFormatted = currency(item.amount, {
            decimal: ',',
          }).format({symbol: 'R$ '});
          const dateFormatted = format(parseISO(item.date), 'dd/MM/yy');
          const categoryFormatted = categories.find(
            (innerItem) => innerItem.key === item.category,
          );

          return {
            ...item,
            type: item.transactionType,
            amount:
              item.transactionType === 'outcome'
                ? `-${amountFormatted}`
                : amountFormatted,
            category: categoryFormatted,
            date: dateFormatted,
            title: item.name,
          };
        }),
      );

      setInitialLoading(false);
    } catch (e) {
      console.log(e);

      return Alert.alert('Não foi possível listar suas transações');
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <Container>
      {initialLoading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </LoadingContainer>
      ) : (
        <>
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
              <LogoutButton onPress={() => console.log('oi')}>
                <LogoutIcon />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HightlightWrapper>
            <HighlightCard
              details={incomeHighlightData.details}
              amount={incomeHighlightData.amount}
              title="Entradas"
              type="income"
            />
            <HighlightCard
              details={outcomeHighlightData.details}
              amount={outcomeHighlightData.amount}
              title="Saídas"
              type="outcome"
            />
            <HighlightCard
              details={totalHighlightData.details}
              amount={totalHighlightData.amount}
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
        </>
      )}
    </Container>
  );
};

export default Dashboard;
