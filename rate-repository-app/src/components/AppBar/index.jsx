import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient } from '@apollo/client';
import AppBarTabLink from './AppBarTabLink';
import AppBarTabButton from './AppBarTabButton';
import Constants from 'expo-constants';
import useCurrentUser from '../../hooks/useCurrentUser';
import theme from '../../theme';
import useAuthStorage from '../../hooks/useAuthStorage';


const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data, loading } = useCurrentUser();

  if (loading || !data) {
    return null;
  }

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

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.flexContainer}>
      <ScrollView horizontal>
          <AppBarTabLink tabName='Repositories' destination='/' />
          <View style={styles.spacer} />
          { data.me !== null && // User signed in
            <>
              <AppBarTabLink tabName='Create Review' destination='/create' />
              <View style={styles.spacer} />
              <AppBarTabButton tabName='Sign Out' action={logOut} />
            </>
          }
          { data.me === null && // User not signed in
          <>
            <AppBarTabLink tabName='Sign In' destination='/signin' />
            <View style={styles.spacer} />
            <AppBarTabLink tabName='Sign Up' destination='/signup' />
          </>
          }
      </ScrollView >
    </View>
  );
};

export default AppBar;