import {Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState, useCallback} from 'react';
import {useForm} from 'react-hook-form';
import uuid from 'react-native-uuid';
import * as yup from 'yup';

import CategorySelector from '../CategorySelector';
import {
  TransactionTypeButton,
  CategorySelect,
  InputForm,
  Button,
} from '../../components';
import {
  TransactionTypeButtonsWrapper,
  Container,
  Content,
  Header,
  Title,
  Form,
} from './styles';

interface CategoryProps {
  color: string;
  name: string;
  icon: string;
  key: string;
}

interface FormData {
  amount: string;
  name: string;
}

const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Preço é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
});

const storageKey = '@gofinances:transactions';

const Register: React.FC = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState<
    'income' | 'outcome' | ''
  >('');
  const [categorySelected, setCategorySelected] = useState<CategoryProps>({
    color: 'transparent',
    name: 'Categoria',
    key: 'category',
    icon: 'any',
  });
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const {
    formState: {errors},
    handleSubmit,
    control,
    reset,
  } = useForm({resolver: yupResolver(schema)});
  const navigation = useNavigation();

  const handleRegister = useCallback(
    async (form: FormData) => {
      if (!transactionTypeSelected) {
        return Alert.alert('Selecione o tipo da transação');
      }

      if (categorySelected.key === 'category') {
        return Alert.alert('Selecione a categoria da transação');
      }

      const data = {
        transactionType: transactionTypeSelected,
        category: categorySelected.key,
        id: String(uuid.v4()),
        amount: form.amount,
        date: new Date(),
        name: form.name,
      };

      try {
        const currentData = await AsyncStorage.getItem(storageKey);
        const currentDataFormatted: any[] = currentData
          ? JSON.parse(currentData)
          : [];

        await AsyncStorage.setItem(
          storageKey,
          JSON.stringify([...currentDataFormatted, data]),
        );

        setTransactionTypeSelected('');
        setCategorySelected({
          color: 'transparent',
          name: 'Categoria',
          key: 'category',
          icon: 'any',
        });
        reset();

        return navigation.navigate('Dashboard');
      } catch (e) {
        console.log(e);

        return Alert.alert('Não foi possível registrar a sua transação');
      }
    },
    [transactionTypeSelected, categorySelected, navigation],
  );

  const handleChangeTransactionTypeSelected = useCallback(
    (value: 'income' | 'outcome') => setTransactionTypeSelected(value),
    [setTransactionTypeSelected],
  );

  const handleChangeCategory = useCallback(
    (value: CategoryProps) => setCategorySelected(value),
    [setCategorySelected],
  );

  const handleToggleModal = useCallback(
    () => setModalOpened((prevState) => !prevState),
    [setModalOpened],
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Content>
          <Form>
            <InputForm
              error={errors.name && errors.name.message}
              autoCapitalize="sentences"
              autoCorrect={false}
              placeholder="Nome"
              control={control}
              name="name"
            />
            <InputForm
              error={errors.amount && errors.amount.message}
              keyboardType="numeric"
              placeholder="Preço"
              control={control}
              name="amount"
            />
            <TransactionTypeButtonsWrapper>
              <TransactionTypeButton
                onPress={() => handleChangeTransactionTypeSelected('income')}
                selected={transactionTypeSelected === 'income'}
                title="Income"
                type="income"
              />
              <TransactionTypeButton
                withoutMarginRight
                onPress={() => handleChangeTransactionTypeSelected('outcome')}
                selected={transactionTypeSelected === 'outcome'}
                title="Outcome"
                type="outcome"
              />
            </TransactionTypeButtonsWrapper>
            <CategorySelect
              title={categorySelected.name}
              onPress={handleToggleModal}
            />
          </Form>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Content>
        <Modal animationType="slide" statusBarTranslucent visible={modalOpened}>
          <CategorySelector
            handleChangeCategory={handleChangeCategory}
            handleToggleModal={handleToggleModal}
            categorySelected={categorySelected}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
