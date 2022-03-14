import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-native';
import { Button, Menu, Provider, Searchbar } from 'react-native-paper';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import theme from '../../theme';

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
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
        onEndReachedThreshold={0.2}
        onEndReached={onEndReach}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <View style={styles.flexItem}>
            <Pressable onPress={() => navigateToRepositoryView(item.id)}>
              <RepositoryItem {...item} />
            </Pressable>
          </View>
        )}
        ListFooterComponent={<View style={{ height: 150 }} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [sortingMenuVisible, setSortingMenuVisible] = useState(false);
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchKeywordDebounce] = useDebounce(searchKeyword, 500);
  const { repositories, fetchMore } = useRepositories(orderBy, orderDirection, searchKeywordDebounce);

  const openMenu = () => setSortingMenuVisible(true);
  const closeMenu = () => setSortingMenuVisible(false);
  const onChangeSearch = query => setSearchKeyword(query);

  const setSortingLatest = () => {
    setOrderBy('CREATED_AT');
    setOrderDirection('DESC');
  };

  const setSortingHighestRated = () => {
    setOrderBy('RATING_AVERAGE');
    setOrderDirection('DESC');
  };

  const setSortingLowestRated = () => {
    setOrderBy('RATING_AVERAGE');
    setOrderDirection('ASC');
  };

  const onEndReach = () => {
    fetchMore();
  };

  const styles = StyleSheet.create({
    filterSection: {
      padding: 20,
      paddingBottom: 0,
      flexDirection: 'column',
      justifyContent: 'center'
    }
  });

  if (!repositories) { return null; }

  return (
    <Provider>
      <View
        style={styles.filterSection}>
        <Searchbar placeholder='Search' onChangeText={onChangeSearch} value={searchKeyword} />
        <Menu visible={sortingMenuVisible} onDismiss={closeMenu} anchor={<Button onPress={openMenu}>Sort by</Button>}>
          <Menu.Item onPress={() => setSortingLatest()} title='Latest repositories' />
          <Menu.Item onPress={() => setSortingHighestRated()} title='Highest rated repositories' />
          <Menu.Item onPress={() => setSortingLowestRated()} title='Lowest rated repositories' />
        </Menu>
      </View>
      <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} />
    </Provider>
  );
};

export default RepositoryList;