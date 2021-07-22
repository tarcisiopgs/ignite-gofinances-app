import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {ViewProps} from 'react-native';

interface IconProps {
  type: 'income' | 'outcome';
}

interface ButtonProps extends RectButtonProps {
  withoutMarginRight?: boolean;
  type: 'income' | 'outcome';
  selected: boolean;
}

interface ContainerProps extends ViewProps {
  withoutMarginRight?: boolean;
  selected: boolean;
}

export const Container = styled.View.attrs({})<ContainerProps>`
  margin: 0
    ${({withoutMarginRight}) => (withoutMarginRight ? 0 : RFValue(8, 812))}px 0
    0;
  border-color: ${({theme, selected}) =>
    selected ? 'transparent' : theme.colors.textLight};
  border-width: ${RFValue(1.5, 812)}px;
  border-radius: ${RFValue(5, 812)}px;
  flex: 1;
`;

export const Button = styled(RectButton).attrs({})<ButtonProps>`
  border-radius: ${RFValue(5, 812)}px;
  padding: ${RFValue(18, 812)}px 0;
  justify-content: center;
  flex-direction: row;

  ${({selected, type}) =>
    type === 'income' &&
    selected &&
    css`
      background-color: ${({theme}) => theme.colors.successLight};
    `}

  ${({selected, type}) =>
    type === 'outcome' &&
    selected &&
    css`
      background-color: ${({theme}) => theme.colors.attentionLight};
    `}
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  margin: 0 0 0 ${RFValue(14, 812)}px;
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;

export const Icon = styled(Feather).attrs({size: RFValue(20, 812)})<IconProps>`
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
`;
