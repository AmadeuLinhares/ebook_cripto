import {TextStyle, ViewStyle} from 'react-native';
import {BaseToast, ErrorToast, ToastConfig} from 'react-native-toast-message';
import theme from '@theme/index';

const successStyle: ViewStyle = {
  backgroundColor: theme.colors.grey.GRAY_400,
  borderLeftColor: theme.colors.grey.WHITE,
};
const text1StyleSuccess: TextStyle = {
  fontSize: theme.FONT_SIZE.LG,
  fontWeight: '600',
  color: theme.colors.grey.WHITE,
};
const text2StyleSuccess: TextStyle = {
  fontSize: theme.FONT_SIZE.SM,
  fontWeight: '400',
  color: theme.colors.grey.WHITE,
};

const errorStyle: ViewStyle = {
  backgroundColor: theme.colors.red.RED_DARK,
  borderLeftColor: theme.colors.grey.WHITE,
};
const text1StyleError: TextStyle = {
  fontSize: theme.FONT_SIZE.LG,
  fontWeight: '600',
  color: theme.colors.grey.WHITE,
};
const text2StyleError: TextStyle = {
  fontSize: theme.FONT_SIZE.SM,
  fontWeight: '400',
  color: theme.colors.grey.WHITE,
};

export const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={successStyle}
      text1Style={text1StyleSuccess}
      text2Style={text2StyleSuccess}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      style={errorStyle}
      text1Style={text1StyleError}
      text2Style={text2StyleError}
    />
  ),
};
