import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity).attrs({})`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(18)}px;
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(21)}px;
  font-size: ${RFValue(14)}px;
`;
