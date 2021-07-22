import {ViewProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface CategoryColorProps extends ViewProps {
  color: string;
}

export const Container = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  margin: 0 0 ${RFValue(8)}px 0;
  flex-direction: row;
`;

export const CategoryInfo = styled.View.attrs({})`
  padding: ${RFValue(12)}px ${RFValue(20)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const CategoryColor = styled.View.attrs({})<CategoryColorProps>`
  border-bottom-left-radius: ${RFValue(5)}px;
  border-top-left-radius: ${RFValue(5)}px;
  background-color: ${({color}) => color};
  width: ${RFValue(4)}px;
`;

export const CategoryName = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  line-height: ${RFValue(22.5)}px;
  font-size: ${RFValue(15)}px;
`;

export const CategoryAmount = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.title};
  line-height: ${RFValue(22.5)}px;
  font-size: ${RFValue(15)}px;
`;
