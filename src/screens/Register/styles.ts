import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
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

export const Content = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(24, 812)}px;
  flex: 1;
`;

export const Form = styled.View.attrs({})`
  flex: 1;
`;

export const TransactionTypeButtonsWrapper = styled.View.attrs({})`
  margin: ${RFValue(8, 812)}px 0 ${RFValue(16, 812)}px;
  justify-content: space-between;
  flex-direction: row;
`;
