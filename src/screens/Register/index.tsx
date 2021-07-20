import React, {useState, useCallback} from 'react';
import {Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import {useForm} from 'react-hook-form';

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

const Register: React.FC = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState<
    'income' | 'outcome' | ''
  >('');
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>({
    color: 'transparent',
    name: 'Categoria',
    key: 'category',
    icon: 'any',
  });
  const {control, handleSubmit} = useForm();

  const handleRegister = useCallback(
    (form: FormData) => {
      if (!transactionTypeSelected) {
        return Alert.alert('Selecione o tipo da transação');
      }

      if (categorySelected.key === 'category') {
        return Alert.alert('Selecione a categoria da transação');
      }

      const data = {
        transactionType: transactionTypeSelected,
        category: categorySelected.key,
        amount: form.amount,
        name: form.name,
      };

      console.log(data);
    },
    [transactionTypeSelected, categorySelected],
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
              autoCapitalize="sentences"
              autoCorrect={false}
              placeholder="Nome"
              control={control}
              name="name"
            />
            <InputForm
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
