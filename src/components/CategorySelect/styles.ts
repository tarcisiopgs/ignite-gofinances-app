import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled(RectButton).attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(18, 812)}px ${RFValue(16, 812)}px;
  border-radius: ${RFValue(5, 812)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;

export const Icon = styled(Feather).attrs({size: RFValue(20, 812)})`
  color: ${({theme}) => theme.colors.text};
`;
