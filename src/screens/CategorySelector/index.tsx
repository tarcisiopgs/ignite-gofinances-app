import React from 'react';

import {Button} from '../../components';
import {categories} from '../../utils';
import {
  CategorySeparator,
  CategoriesList,
  CategoryItem,
  CategoryName,
  CategoryIcon,
  Container,
  Content,
  Header,
  Footer,
  Title,
} from './styles';

interface CategoryProps {
  color: string;
  name: string;
  icon: string;
  key: string;
}

interface CategorySelectorProps {
  handleChangeCategory: (value: CategoryProps) => void;
  categorySelected: CategoryProps;
  handleToggleModal: () => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  handleChangeCategory,
  handleToggleModal,
  categorySelected,
}) => {
  const getCategoryItemKey = (item: CategoryProps, index: number) =>
    String(index);

  const renderCategoryItem = ({item}: {item: CategoryProps}) => (
    <CategoryItem
      selected={categorySelected.key === item.key}
      onPress={() => handleChangeCategory(item)}>
      <CategoryIcon name={item.icon} />
      <CategoryName>{item.name}</CategoryName>
    </CategoryItem>
  );

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <Content>
        <CategoriesList
          ItemSeparatorComponent={() => <CategorySeparator />}
          keyExtractor={getCategoryItemKey}
          renderItem={renderCategoryItem}
          data={categories}
        />
        <Footer>
          <Button onPress={handleToggleModal} title="Selecionar" />
        </Footer>
      </Content>
    </Container>
  );
};

export default CategorySelector;
