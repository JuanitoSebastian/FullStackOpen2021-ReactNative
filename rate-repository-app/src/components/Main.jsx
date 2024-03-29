import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import RepositoryView from './RepositoryView';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backdrop
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/signin' element={<SignIn />} exact/>
        <Route path='/signup' element={<SignUp />} exact/>
        <Route path='/create' element={<CreateReview />} />
        <Route path='/repository/:id' element={<RepositoryView />} />
        <Route path='/' element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;