import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {TextProps} from 'react-native';

interface AmountProps extends TextProps {
  type: string;
}

export const Container = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(18, 812)}px ${RFValue(24, 812)}px;
  border-radius: ${RFValue(5, 812)}px;
  margin: ${RFValue(16, 812)}px 0 0;
`;

export const CategoryWrapper = styled.View.attrs({})`
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const CategoryName = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin: 0 0 0 ${RFValue(17, 812)}px;
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;

export const CategoryIcon = styled(Feather).attrs({size: RFValue(18, 812)})`
  color: ${({theme}) => theme.colors.text};
`;

export const DateText = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;

export const Amount = styled.Text.attrs({})<AmountProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'income' ? theme.colors.success : theme.colors.attention};
  margin: 0 0 ${RFValue(20, 812)}px 0;
  line-height: ${RFValue(30, 812)}px;
  font-size: ${RFValue(20, 812)}px;
`;

export const Footer = styled.View.attrs({})`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
  margin: 0 0 ${RFValue(2, 812)}px;
`;
