import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

export const Container = styled(TouchableOpacity).attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  border-radius: ${RFValue(5)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  line-height: ${RFValue(21)}px;
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather).attrs({size: RFValue(20)})`
  color: ${({theme}) => theme.colors.text};
`;
