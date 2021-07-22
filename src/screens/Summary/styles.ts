import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  flex: 1;
`;

export const Header = styled.View.attrs({})`
  padding: ${getStatusBarHeight() + RFValue(37, 812)}px 0 ${RFValue(20, 812)}px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(27, 812)}px;
  font-size: ${RFValue(18, 812)}px;
`;

export const Content = styled.ScrollView.attrs({})`
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(24, 812)}px;
  flex: 1;
`;

export const LoadingContainer = styled.View.attrs({})`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ChartContainer = styled.View.attrs({})`
  align-items: center;
`;

export const FilterContainer = styled.View.attrs({})`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const FilterText = styled.Text.attrs({})`
  color: ${({theme}) => theme.colors.textSecondary};
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: ${RFValue(30, 812)}px;
  font-size: ${RFValue(20, 812)}px;
  text-transform: capitalize;
`;
