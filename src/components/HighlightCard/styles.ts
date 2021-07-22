import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {ViewProps, TextProps} from 'react-native';
import {Feather} from '@expo/vector-icons';

interface ContainerProps extends ViewProps {
  type: 'income' | 'outcome' | 'total';
  last?: boolean;
}

interface IconProps {
  type: 'income' | 'outcome' | 'total';
}

interface TitleProps extends TextProps {
  type: 'income' | 'outcome' | 'total';
}

interface AmountProps extends TextProps {
  type: 'income' | 'outcome' | 'total';
}

interface AmountDetailsProps extends TextProps {
  type: 'income' | 'outcome' | 'total';
}

export const Container = styled.View.attrs({})<ContainerProps>`
  padding: ${RFValue(19, 812)}px ${RFValue(23, 812)}px ${RFValue(42, 812)}px;
  margin: 0 ${({last}) => (last ? 0 : RFValue(16, 812))}px 0 0;
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  border-radius: ${RFValue(5, 812)}px;
  width: ${RFValue(300, 812)}px;
`;

export const Header = styled.View.attrs({})`
  justify-content: space-between;
  margin: 0 0 ${RFValue(38, 812)}px;
  align-items: flex-start;
  flex-direction: row;
`;

export const Title = styled.Text.attrs({})<TitleProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;

export const Icon = styled(Feather).attrs({
  size: RFValue(33, 812),
})<IconProps>`
  ${({type}) =>
    type === 'income' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `}

  ${({type}) =>
    type === 'outcome' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `}

    ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `}
`;

export const Amount = styled.Text.attrs({})<AmountProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
  line-height: ${RFValue(48, 812)}px;
  font-size: ${RFValue(32, 812)}px;
`;

export const AmountDetails = styled.Text.attrs({})<AmountDetailsProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
  line-height: ${RFValue(18, 812)}px;
  font-size: ${RFValue(12, 812)}px;
`;

export const Footer = styled.View.attrs({})``;
