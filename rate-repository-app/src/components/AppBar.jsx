import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

import theme from '../theme';

const AppBar = () => {

  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      flexDirection: 'row',
      width: Constants.width,
      height: 100,
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: theme.colors.tabBar
    }
  });

  return <View style={styles.flexContainer}>
    <AppBarTab tabName='Repositories' />
    <AppBarTab tabName='My Profile' />
  </View>;
};

export default AppBar;