import React from 'react';
import BoldText from '../components/CustomTexts/BoldText';
import AppWrapper from '../components/AppWrapper';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <AppWrapper hasLeftIcon={false}>
      <View style={styles.container}>
        <BoldText>HOME</BoldText>
      </View>
    </AppWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
