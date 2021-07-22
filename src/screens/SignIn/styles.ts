import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';
import LogoSvg from '../../assets/logo.svg';

export const Container = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const PrimaryContainer = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${RFValue(144, 812)}px 0 0;
  flex: 7;
`;

export const SecondaryContainer = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.secondary};
  flex: 3;
`;

export const LogoIcon = styled(LogoSvg).attrs({
  height: RFValue(150, 812),
  width: RFValue(150, 812),
})`
  align-self: center;
`;

export const WelcomeTitle = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(40, 812)}px;
  margin: ${RFValue(20, 812)}px 0 0;
  font-size: ${RFValue(30, 812)}px;
  text-align: center;
`;

export const WelcomeSubitle = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  line-height: ${RFValue(24, 812)}px;
  margin: ${RFValue(80, 812)}px 0 0;
  font-size: ${RFValue(16, 812)}px;
  text-align: center;
`;

export const Button = styled(RectButton).attrs({})`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${RFValue(5, 812)}px;
  margin: 0 0 ${RFValue(16, 812)}px;
  padding: 0 ${RFValue(16, 812)}px;
  height: ${RFValue(56, 812)}px;
  align-items: center;
  flex-direction: row;
`;

export const GoogleIcon = styled(GoogleSvg).attrs({
  height: RFValue(24, 812),
  width: RFValue(24, 812),
})``;

export const AppleIcon = styled(AppleSvg).attrs({
  height: RFValue(24, 812),
  width: RFValue(24, 812),
})``;

export const ButtonsContent = styled.View.attrs({})`
  padding: 0 ${RFValue(32, 812)}px;
  top: ${-RFValue(28, 812)}px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const ButtonDivider = styled.View.attrs({})`
  background-color: ${({theme}) => theme.colors.background};
  margin: 0 ${RFValue(16, 812)}px;
  width: ${RFValue(1, 812)}px;
  height: 100%;
`;

export const ButtonText = styled.Text.attrs({})`
  font-family: ${({theme}) => theme.fonts.medium};
  line-height: ${RFValue(21, 812)}px;
  font-size: ${RFValue(14, 812)}px;
  text-align: center;
  flex: 1;
`;
