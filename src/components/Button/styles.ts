import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({})`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(5, 812)}px;
  padding: ${RFValue(18, 812)}px;
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
`;
