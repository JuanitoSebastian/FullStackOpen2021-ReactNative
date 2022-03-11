import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import Text from '../Text';
import theme from '../../theme';

const ReviewView = (props) => {

  const styles = StyleSheet.create({
    reviewFlexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      maxWidth: '100%'
    },
    reviewFlexItem: {
      flexGrow: 0,
      paddingBottom: 12,
      maxWidth: '90%',
      padding: 10
    },
    ratingCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: theme.colors.primary,
      borderWidth: 2,
      justifyContent: 'center'
    },
    textStyle: {
      textAlign: 'center'
    }
  });

  const date = format(new Date(props.createdAt),  'dd.MM.yyyy');

  return (
    <View style={styles.reviewFlexContainer}>
      <View style={styles.reviewFlexItem}>
        <View style={styles.ratingCircle}>
          <Text style={styles.textStyle} color='primary'>{props.rating}</Text>
        </View>
      </View>
      <View style={styles.reviewFlexItem}>
        <Text color='textSecondary' fontWeight='bold'>{props.user.username}</Text>
        <Text color='textSecondary'>{date}</Text>
        <Text color='textSecondary' style={styles.textPadding}>{props.text}</Text>
      </View>

    </View>
  );
};

export default ReviewView;