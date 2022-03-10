import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import theme from '../../theme';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories.edges.map(edge => edge.node);
  const navigate = useNavigate();

  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column'
    },
    separator: {
      height: 12,
    },
    flexItem: {
      flexGrow: 0,
      backgroundColor: theme.colors.contentBackground,
      borderRadius: 10,
      maxWidth: '100%',
      width: 'auto',
      padding: 16
    }
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  const navigateToRepositoryView = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <View style={styles.flexContainer}>
      <ItemSeparator />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <View style={styles.flexItem}>
            <Pressable onPress={() => navigateToRepositoryView(item.id)}>
              <RepositoryItem {...item} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const RepositoryList = () => {

  const { data, loading } = useRepositories();

  if (loading) { return null; }

  return (
    <RepositoryListContainer repositories={data.repositories} />
  );
};

export default RepositoryList;