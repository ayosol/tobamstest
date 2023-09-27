import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = React.ComponentProps<typeof Text>;

const NormalText: React.FC<Props> = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default NormalText;
