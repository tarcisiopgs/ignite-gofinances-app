import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled(TextInput).attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  color: ${({theme}) => theme.colors.textSecondary};
  font-family: ${({theme}) => theme.fonts.regular};
  border-radius: ${RFValue(5, 812)}px;
  line-height: ${RFValue(21, 812)}px;
  margin: 0 0 ${RFValue(8, 812)}px;
  font-size: ${RFValue(14, 812)}px;
  padding: ${RFValue(18, 812)}px;
`;
