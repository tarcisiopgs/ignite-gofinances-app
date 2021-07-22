import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  width: 100%;
`;

export const Error = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.attention};
  font-size: ${RFValue(14, 812)}px;
  margin: 0 0 ${RFValue(8, 812)}px;
`;
