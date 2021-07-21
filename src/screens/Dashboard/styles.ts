import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {BorderlessButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

interface UserTextProps extends TextProps {
  bold?: boolean;
}

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

export const Container = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFValue(278)}px;
`;

export const UserData = styled.View.attrs({})`
  flex-direction: row;
`;

export const UserImage = styled.Image.attrs({})`
  border-radius: ${RFValue(10)}px;
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const UserText = styled.Text.attrs({})<UserTextProps>`
  font-family: ${({theme, bold}) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(24)}px;
  font-size: ${RFValue(18)}px;
`;

export const UserInfo = styled.View.attrs({})`
  margin-left: ${RFValue(17)}px;
`;

export const UserWrapper = styled.View.attrs({})`
  margin: ${getStatusBarHeight() + RFValue(28)}px 0 0 0;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px;
  flex-direction: row;
  align-items: center;
`;

export const HightlightWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {paddingHorizontal: RFValue(24)},
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  position: absolute;
  margin: ${RFValue(124)}px 0 0;
`;

export const TransactionsWrapper = styled.View.attrs({})`
  margin: ${RFValue(84)}px 0 0;
  padding: 0 ${RFValue(24)}px;
  flex: 1;
`;

export const TransactionsTitle = styled.Text.attrs({})`
  color: ${({theme}) => theme.colors.textSecondary};
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: ${RFValue(27)}px;
  font-size: ${RFValue(18)}px;
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<TransactionData>,
).attrs({
  contentContainerStyle: {paddingBottom: getBottomSpace() + RFValue(24)},
  showsVerticalScrollIndicator: false,
})``;

export const LogoutButton = styled(BorderlessButton).attrs({})``;

export const LogoutIcon = styled(Feather).attrs(({theme}) => ({
  color: theme.colors.secondary,
  size: RFValue(24),
  name: 'power',
}))``;

export const LoadingContainer = styled.View.attrs({})`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
