import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../util/colors';
import BoldText from '../CustomTexts/BoldText';

type Props = {
  onClick: () => void;
  btnTitle: string;
};

const BtnSecondary = ({onClick, btnTitle}: Props) => {
  return (
    <Pressable style={styles.primaryBtn} onPress={onClick}>
      <BoldText style={{color: COLOR.primaryRed}}>{btnTitle}</BoldText>
    </Pressable>
  );
};

export default BtnSecondary;

const styles = StyleSheet.create({
  primaryBtn: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: COLOR.white,
    alignSelf: 'center',
    borderColor: COLOR.primaryRed,
    borderWidth: 1,
  },
});
