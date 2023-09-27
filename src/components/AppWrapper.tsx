import {
  Image,
  Pressable,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from '../util/colors';
import {useNavigation} from '@react-navigation/native';
import ICONS from '../util/icons';
import BoldText from './CustomTexts/BoldText';
import {HorizontalSpacer} from './Spacers/HorizontalSpacer';
import {VerticalSpacer} from './Spacers/VerticalSpacer';
import {HorizontalDivider} from './Dividers/HorizontalDivider';

interface Props {
  navigation?: any;
  titleText?: string;
  titleIcon?: any;
  rightIcon?: any;
  children?: any;
  hasLeftIcon?: boolean;
  leftIcon?: any;
  hasDivider?: boolean;
  hasBottomSpacer?: boolean;
  containerStyle?: any;
  topContainerStyle?: any;
  onBackBtnPress?: () => void;
  scrollEnabled?: boolean;
  scrollStyle?: any;
}

const STYLES = ['default', 'dark-content', 'light-content'] as const;

const AppWrapper: React.FC<Props> = ({
  hasLeftIcon = true,
  hasDivider = true,
  leftIcon,
  titleText,
  titleIcon,
  children,
  containerStyle,
  topContainerStyle,
  onBackBtnPress,
}) => {
  const navigation = useNavigation();
  const [statusBarStyle] = useState<StatusBarStyle>(STYLES[2]);
  const handleBackBtnPress = () => {
    if (onBackBtnPress) {
      onBackBtnPress();
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar
        backgroundColor={COLOR.appBg}
        barStyle={statusBarStyle}
        translucent={true}
      />
      {/* Back Arrow */}
      <View style={[styles.topContainer, topContainerStyle]}>
        {hasLeftIcon ? (
          leftIcon ?? (
            <Pressable onPress={handleBackBtnPress} style={styles.btnBack}>
              <Image source={ICONS.backIcon} style={styles.btnBackIcon} />
            </Pressable>
          )
        ) : (
          <View>
            <HorizontalSpacer />
          </View>
        )}
        {/* Title */}
        {titleIcon ? titleIcon : <BoldText>{titleText}</BoldText>}
        {/* Right Icon */}
        {hasLeftIcon ? (
          <View style={styles.rightIcon}>
            <HorizontalSpacer />
          </View>
        ) : (
          <View>
            <HorizontalSpacer />
          </View>
        )}
      </View>
      {/* Divider Line */}
      {hasDivider && <HorizontalDivider />}
      <VerticalSpacer />
      {children}
    </SafeAreaView>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.appBg,
    paddingTop: 24,
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnBack: {
    width: 40,
    height: 40,
    borderRadius: 12,
    border: 4,
    borderColor: COLOR.black,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  btnBackIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  rightIcon: {
    width: 48,
    height: 40,
    marginRight: 16,
  },
});
