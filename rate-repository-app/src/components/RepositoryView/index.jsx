import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import { useParams } from 'react-router-native';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import useRepository from '../../hooks/useRepository';

const RepositoryView = () => {

  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id, 5);

  const styles = StyleSheet.create({
    flexItem: {
      backgroundColor: theme.colors.contentBackground,
      borderRadius: 10,
      maxWidth: '100%',
      width: 'auto',
      padding: 16
    }
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (repository) {
    return (
      <View style={styles.flexItem}>
        <RepositoryItem {...repository} detailed={true} onEndReach={onEndReach} />
      </View>
    );
  }

  return null;
};

export default RepositoryView;