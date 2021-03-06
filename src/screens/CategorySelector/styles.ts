import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {FlatList} from 'react-native';
import {
  GestureHandlerRootView,
  RectButtonProps,
  RectButton,
} from 'react-native-gesture-handler';

interface CategoryProps {
  color: string;
  name: string;
  icon: string;
  key: string;
}

interface CategoryItemProps extends RectButtonProps {
  selected: boolean;
}

export const Container = styled(GestureHandlerRootView).attrs({})`
  flex: 1;
`;

export const Content = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View.attrs({})`
  padding: ${getStatusBarHeight() + RFValue(37, 812)}px 0 ${RFValue(20, 812)}px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(27, 812)}px;
  font-size: ${RFValue(18, 812)}px;
`;

export const CategoryItem = styled(RectButton).attrs({})<CategoryItemProps>`
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.secondaryLight : theme.colors.background};
  padding: ${RFValue(15, 812)}px;
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  margin: 0 0 0 ${RFValue(15, 812)}px;
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;

export const CategoryIcon = styled(Feather).attrs({size: RFValue(20, 812)})`
  color: ${({theme}) => theme.colors.title};
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<CategoryProps>,
).attrs({showsVerticalScrollIndicator: false})`
  flex: 1;
`;

export const CategorySeparator = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.title};
  height: ${RFValue(1, 812)}px;
`;

export const Footer = styled.View.attrs({})`
  padding: ${RFValue(24, 812)}px ${RFValue(24, 812)}px
    ${getBottomSpace() + RFValue(24, 812)}px;
`;
