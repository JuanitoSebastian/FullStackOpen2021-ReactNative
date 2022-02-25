import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

import theme from '../../theme';

const AppBar = () => {

  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      flexDirection: 'row',
      height: 100,
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: theme.colors.tabBar
    },
    spacer: {
      width: 16
    }
  });

  return (
    <View style={styles.flexContainer}>
      <ScrollView horizontal>
          <AppBarTab tabName='Repositories' destination='/' />
          <View style={styles.spacer} />
          <AppBarTab tabName='Sign In' destination='/signin' />
      </ScrollView >
    </View>
  );
};

export default AppBar;