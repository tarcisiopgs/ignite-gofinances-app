import React, {useState, useCallback} from 'react';
import {Modal} from 'react-native';

import CategorySelector from '../CategorySelector';
import {
  TransactionTypeButtonsWrapper,
  Container,
  Content,
  Header,
  Title,
  Form,
} from './styles';
import {
  TransactionTypeButton,
  CategorySelect,
  Button,
  Input,
} from '../../components';

interface CategoryProps {
  color: string;
  name: string;
  icon: string;
  key: string;
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
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Content>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
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
          <CategorySelect onPress={handleToggleModal} title="Categoria" />
        </Form>
        <Button title="Enviar" />
      </Content>
      <Modal statusBarTranslucent visible={modalOpened}>
        <CategorySelector
          handleChangeCategory={handleChangeCategory}
          handleToggleModal={handleToggleModal}
          category=""
        />
      </Modal>
    </Container>
  );
};

export default Register;
