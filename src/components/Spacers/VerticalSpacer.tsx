import {View} from 'react-native';

interface Props {
  height?: any;
}

export const VerticalSpacer = ({height = 20}: Props) => {
  return <View style={{height: height}} />;
};
