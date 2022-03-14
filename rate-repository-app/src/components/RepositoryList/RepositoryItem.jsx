import { View, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import RepositoryItemStats from './RepositoryItemStats';
import Text from '../Text';
import theme from '../../theme';
import ReviewView from '../ReviewView';

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
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: 6,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 8
    },
    submitText: {
      textAlign: 'center'
    },
    separator: {
      height: 12
    },
    reviewList: {
      paddingTop: 4
    }
  });

  const handleGitHubPress = () => {
    Linking.openURL(props.url);
  };

  const reviews = props.detailed
    ? props.reviews.edges.map(edge => edge.node)
    : undefined;

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View testID='repositoryItem' sytle={styles.repositoryItemFlexContainer}>
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
      {props.detailed &&
        <View>
          <Pressable style={styles.submitButton} onPress={handleGitHubPress}>
            <Text color='tabBarHeading' fontWeight='bold' style={styles.submitText}>Open in GitHub</Text>
          </Pressable>
          <FlatList
            style={styles.reviewList}
            onEndReachedThreshold={0.05}
            onEndReached={props.onEndReach}
            data={reviews}
            renderItem={({ item }) => <ReviewView {...item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            ListFooterComponent={<View style={{height: 600}}/>}
          />
        </View>
      }

    </View>
  );

};

export default RepositoryItem;