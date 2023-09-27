import {View} from 'react-native';

interface Props {
  width?: any;
}

export const HorizontalSpacer = ({width = 20}: Props) => {
  return <View style={{width: width}} />;
};
