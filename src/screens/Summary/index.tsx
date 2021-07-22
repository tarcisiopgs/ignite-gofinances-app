import AsyncStorage from '@react-native-async-storage/async-storage';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {BorderlessButton} from 'react-native-gesture-handler';
import React, {useEffect, useCallback, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator, Alert} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import locale from 'date-fns/locale/pt-BR';
import {VictoryPie} from 'victory-native';
import currency from 'currency.js';
import {
  addMonths,
  endOfMonth,
  format,
  isBefore,
  parseISO,
  startOfMonth,
} from 'date-fns';
import lodash from 'lodash';

import {SummaryPill} from '../../components';
import {categories} from '../../utils';
import {
  LoadingContainer,
  FilterContainer,
  ChartContainer,
  FilterText,
  Container,
  Content,
  Header,
  Title,
} from './styles';
import {isAfter} from 'date-fns/esm';

const storageKey = '@gofinances:transactions';

const Summary: React.FC = () => {
  const [summaryCategories, setSummaryCategories] = useState<any[]>([]);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filter, setFilter] = useState<Date>(new Date());
  const bottomHeight = useBottomTabBarHeight();
  const theme = useTheme();

  const handleChangeFilter = useCallback(
    (value: number) => {
      setFilter((prevState) => addMonths(prevState, value));
    },
    [setFilter],
  );

  const loadTransactions = async () => {
    try {
      const loadedData = await AsyncStorage.getItem(storageKey);
      const parsedData = loadedData ? JSON.parse(loadedData) : [];

      setSummaryCategories(lodash.keys(lodash.groupBy(parsedData, 'category')));
      setTransactions(parsedData);
      setInitialLoading(false);
    } catch (e) {
      console.log(e);

      return Alert.alert('Não foi possível listar as suas transações');
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
            <Title>Resumo por categoria</Title>
          </Header>
          <Content
            contentContainerStyle={{paddingBottom: bottomHeight}}
            showsHorizontalScrollIndicator={false}>
            <FilterContainer>
              <BorderlessButton onPress={() => handleChangeFilter(-1)}>
                <Feather
                  color={theme.colors.textSecondary}
                  name="chevron-left"
                  size={RFValue(20)}
                />
              </BorderlessButton>
              <FilterText>{format(filter, 'MMMM, yyyy', {locale})}</FilterText>
              <BorderlessButton onPress={() => handleChangeFilter(1)}>
                <Feather
                  color={theme.colors.textSecondary}
                  name="chevron-right"
                  size={RFValue(20)}
                />
              </BorderlessButton>
            </FilterContainer>
            <ChartContainer>
              <VictoryPie
                style={{
                  labels: {
                    fontFamily: theme.fonts.bold,
                    lineHeight: RFValue(24.98),
                    fill: theme.colors.shape,
                    fontSize: RFValue(16.65),
                    fontWeight: 'bold',
                  },
                }}
                labelRadius={RFValue(75)}
                colorScale={summaryCategories.map((value) => {
                  const category: any = categories.find(
                    (item) => item.key === value,
                  );

                  return category.color;
                })}
                data={summaryCategories.map((value, index) => {
                  const incomeItems = lodash.filter(
                    transactions,
                    (item) =>
                      item.category === value &&
                      item.transactionType === 'income' &&
                      isBefore(startOfMonth(filter), parseISO(item.date)) &&
                      isAfter(endOfMonth(filter), parseISO(item.date)),
                  );
                  const outcomeItems = lodash.filter(
                    transactions,
                    (item) =>
                      item.category === value &&
                      item.transactionType === 'outcome' &&
                      isBefore(startOfMonth(filter), parseISO(item.date)) &&
                      isAfter(endOfMonth(filter), parseISO(item.date)),
                  );

                  return {
                    x: index,
                    y:
                      lodash.sumBy(incomeItems, 'amount') -
                      lodash.sumBy(outcomeItems, 'amount'),
                    label: `${(
                      ((lodash.sumBy(incomeItems, 'amount') -
                        lodash.sumBy(outcomeItems, 'amount')) /
                        (lodash.sumBy(
                          lodash.filter(
                            transactions,
                            (item) => item.transactionType === 'income',
                          ),
                          'amount',
                        ) -
                          lodash.sumBy(
                            lodash.filter(
                              transactions,
                              (item) => item.transactionType === 'outcome',
                            ),
                            'amount',
                          ))) *
                      100
                    ).toFixed(0)}%`,
                  };
                })}
              />
            </ChartContainer>
            {summaryCategories.map((value, index) => {
              const category: any = categories.find(
                (item) => item.key === value,
              );
              const incomeItems = lodash.filter(
                transactions,
                (item) =>
                  item.category === value &&
                  item.transactionType === 'income' &&
                  isBefore(startOfMonth(filter), parseISO(item.date)) &&
                  isAfter(endOfMonth(filter), parseISO(item.date)),
              );
              const outcomeItems = lodash.filter(
                transactions,
                (item) =>
                  item.category === value &&
                  item.transactionType === 'outcome' &&
                  isBefore(startOfMonth(filter), parseISO(item.date)) &&
                  isAfter(endOfMonth(filter), parseISO(item.date)),
              );

              return (
                <SummaryPill
                  amount={currency(
                    lodash.sumBy(incomeItems, 'amount') -
                      lodash.sumBy(outcomeItems, 'amount'),
                    {
                      decimal: ',',
                    },
                  ).format({symbol: 'R$ '})}
                  color={category.color}
                  title={category.name}
                  key={index}
                />
              );
            })}
          </Content>
        </>
      )}
    </Container>
  );
};

export default Summary;
