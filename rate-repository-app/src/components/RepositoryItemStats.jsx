import { View, StyleSheet } from 'react-native';
import { numberFormatter } from '../utils/number_formatter';
import Text from './Text';

const RepositoryItemStats = (props) => {

  const styles = StyleSheet.create({
    statsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    statsItem: {
      flexGrow: 0,
      paddingLeft: 20,
      paddingRight: 20
    }
  });

  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsItem}>
        <Text fontWeight='bold'>{numberFormatter(props.stargazersCount)}</Text>
        <Text color='textSecondary'>Stars</Text>
      </View>
      <View style={styles.statsItem}>
        <Text fontWeight='bold'>{numberFormatter(props.forksCount)}</Text>
        <Text color='textSecondary'>Forks</Text>
      </View>
      <View style={styles.statsItem}>
        <Text fontWeight='bold'>{numberFormatter(props.reviewCount)}</Text>
        <Text color='textSecondary'>Reviews</Text>
      </View>
      <View style={styles.statsItem}>
        <Text fontWeight='bold'>{numberFormatter(props.ratingAverage)}</Text>
        <Text color='textSecondary'>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemStats;