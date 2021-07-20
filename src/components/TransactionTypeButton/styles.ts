import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Feather} from '@expo/vector-icons';

interface IconProps {
  type: 'income' | 'outcome';
}

interface ContainerProps extends TouchableOpacityProps {
  withoutMarginRight?: boolean;
  type: 'income' | 'outcome';
  selected: boolean;
}

export const Container = styled(TouchableOpacity).attrs({})<ContainerProps>`
  margin: 0 ${({withoutMarginRight}) => (withoutMarginRight ? 0 : RFValue(8))}px
    0 0;
  border-color: ${({theme, selected}) =>
    selected ? 'transparent' : theme.colors.textLight};
  border-width: ${RFValue(1.5)}px;
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(18)}px 0;
  justify-content: center;
  flex-direction: row;
  flex: 1;

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
  margin: 0 0 0 ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather).attrs({size: RFValue(20)})<IconProps>`
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
