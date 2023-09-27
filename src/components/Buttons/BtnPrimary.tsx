import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../util/colors';
import BoldText from '../CustomTexts/BoldText';

type Props = {
  onClick: () => void;
  btnTitle: string;
  extraTitle?: string;
};

const BtnPrimary = ({onClick, btnTitle, extraTitle}: Props) => {
  return (
    <Pressable style={styles.primaryBtn} onPress={onClick}>
      <BoldText style={{color: COLOR.white}}>{btnTitle}</BoldText>
      {extraTitle !== '' && (
        <BoldText style={{color: COLOR.white}}> - {extraTitle}</BoldText>
      )}
    </Pressable>
  );
};

export default BtnPrimary;

const styles = StyleSheet.create({
  primaryBtn: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: COLOR.primaryRed,
    alignSelf: 'center',
  },
});
