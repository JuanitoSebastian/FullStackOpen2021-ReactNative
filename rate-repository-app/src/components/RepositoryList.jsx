import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import repositories from '../utils/repo_list';
import theme from '../theme';

const RepositoryList = () => {

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
      backgroundColor: theme.colors.repositoryItemBg,
      borderRadius: 10,
      maxWidth: '100%',
      width: 'auto',
      padding: 16
    }
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.flexContainer}>
      <ItemSeparator />
      <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View style={styles.flexItem}>
          <RepositoryItem {...item} />
        </View>
      )}
      />
    </View> 
  );
};

export default RepositoryList;