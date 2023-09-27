import React from 'react';
import BoldText from '../components/CustomTexts/BoldText';
import AppWrapper from '../components/AppWrapper';
import {StyleSheet, View} from 'react-native';

const Account = () => {
  return (
    <AppWrapper hasLeftIcon={false}>
      <View style={styles.container}>
        <BoldText>ACCOUNT</BoldText>
      </View>
    </AppWrapper>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
