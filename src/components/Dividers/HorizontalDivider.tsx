import {View} from 'react-native';
import {COLOR} from '../../util/colors';
import metrics from '../../util/metrics';

interface Props {
  width?: any;
  height?: any;
  color?: any;
}

export const HorizontalDivider = ({
  width = metrics.screenWidth,
  height = 2,
  color,
}: Props) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: color ?? COLOR.border,
      }}
    />
  );
};
