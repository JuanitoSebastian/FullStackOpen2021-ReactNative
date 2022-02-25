import { View, StyleSheet, Image } from 'react-native';
import RepositoryItemStats from './RepositoryItemStats';
import Text from '../Text';

const RepositoryItem = (props) => {

  const styles = StyleSheet.create({
    repositoryItemFlexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      maxWidth: '100%'
    },
    repositoryItemFlexItem: {
      flexGrow: 0,
      paddingBottom: 12,
      maxWidth: '100%'
    },
    headerRowFlexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    headerRowFlexItem: {
      flexGrow: 0,
      padding: 4,
      maxWidth: '90%'
    },
    textPadding: {
      padding: 2
    },
    tinyLogo: {
      width: 50,
      height: 50,
    }
  });


  return (
    <View sytle={styles.repositoryItemFlexContainer}>
      <View style={styles.repositoryItemFlexItem}>
        <View style={styles.headerRowFlexContainer}>
          <View style={styles.headerRowFlexItem}>
            <Image
              style={styles.tinyLogo}
              source={{ uri: props.ownerAvatarUrl }}
            />
          </View>
          <View style={styles.headerRowFlexItem}>
            <Text fontWeight='bold' style={styles.textPadding}>{props.fullName}</Text>
            <Text color='textSecondary' style={styles.textPadding}>{props.description}</Text>
            <Text color='primary' style={styles.textPadding}>{props.language}</Text>
          </View>
        </View>
      </View>
      <RepositoryItemStats {...props} />
    </View>
  );

};

export default RepositoryItem;