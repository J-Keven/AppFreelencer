import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Container, IconFeather } from './style';

interface IconProps extends TouchableOpacityProps {
  iconName: string;
  isTheRoute: boolean;
}
const Icon: React.FC<IconProps> = ({ isTheRoute, iconName, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <IconFeather name={iconName} size={32} isTheRoute={isTheRoute} />
    </TouchableOpacity>
  );
};
export default Icon;
