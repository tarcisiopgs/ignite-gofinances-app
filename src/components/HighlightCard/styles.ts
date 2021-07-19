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
  padding: ${RFValue(19)}px ${RFValue(23)}px ${RFValue(42)}px;
  margin: 0 ${({last}) => (last ? 0 : RFValue(16))}px 0 0;
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  width: ${RFValue(300)}px;
`;

export const Header = styled.View.attrs({})`
  justify-content: space-between;
  margin: 0 0 ${RFValue(38)}px;
  align-items: flex-start;
  flex-direction: row;
`;

export const Title = styled.Text.attrs({})<TitleProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
  line-height: ${RFValue(21)}px;
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather).attrs({
  size: RFValue(33),
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
  line-height: ${RFValue(48)}px;
  font-size: ${RFValue(32)}px;
`;

export const AmountDetails = styled.Text.attrs({})<AmountDetailsProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
  line-height: ${RFValue(18)}px;
  font-size: ${RFValue(12)}px;
`;

export const Footer = styled.View.attrs({})``;
