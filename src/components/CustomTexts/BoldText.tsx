import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = React.ComponentProps<typeof Text>;

const BoldText: React.FC<Props> = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BoldText;
