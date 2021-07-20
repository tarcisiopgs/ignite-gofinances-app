import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled(TextInput).attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  color: ${({theme}) => theme.colors.textSecondary};
  font-family: ${({theme}) => theme.fonts.regular};
  border-radius: ${RFValue(5)}px;
  line-height: ${RFValue(21)}px;
  margin: 0 0 ${RFValue(8)}px;
  font-size: ${RFValue(14)}px;
  padding: ${RFValue(18)}px;
`;
