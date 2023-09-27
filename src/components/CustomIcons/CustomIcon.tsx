import React from 'react';
import {Image} from 'react-native';
import ICONS from '../../util/icons';

interface Props {
  icon: any;
  width: number | string;
  height: number | string;
  style?: object;
}
const CustomIcon: React.FC<Props> = ({icon, width, height, style}) => {
  const iconStyle = {
    width: width,
    height: height,
    alignSelf: 'center',
  };
  return (
    <Image
      source={icon ?? ICONS.placeholderIcon}
      resizeMode="contain"
      style={[iconStyle, style]}
    />
  );
};

export default CustomIcon;
