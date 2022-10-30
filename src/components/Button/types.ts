import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  variant: 'primary' | 'secondary';
  children: string;
  onError?: boolean;
  helpText?: string;
  isLoading?: boolean;
}
