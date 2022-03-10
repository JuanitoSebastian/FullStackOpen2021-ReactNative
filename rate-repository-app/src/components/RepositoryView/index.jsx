import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme';
import { useParams } from 'react-router-native';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import useRepository from '../../hooks/useRepository';

const RepositoryView = () => {

  const { id } = useParams();
  const fetchRepository = useRepository();
  const [repo, setRepo] = useState(undefined);

  const styles = StyleSheet.create({
    flexItem: {
      backgroundColor: theme.colors.contentBackground,
      borderRadius: 10,
      maxWidth: '100%',
      width: 'auto',
      padding: 16
    }
  });


  useEffect(async () => {
    const { data } = await fetchRepository(id);
    const repoToSet = data.repository;
    setRepo(repoToSet);
  }, []);

  if (repo) {
    return (
      <View style={styles.flexItem}>
        <RepositoryItem {...repo} githubButton={true} />
      </View>
    );
  }

  return null;
};

export default RepositoryView;