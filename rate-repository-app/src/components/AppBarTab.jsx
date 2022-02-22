import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = (props) => {

  const styles = StyleSheet.create({
    tabItemContainer: {
      
    }
  });

  return (
    <View style={styles.tabBarFlexItem}>
      <Link to={props.destination}>
        <Text color='tabBarHeading' fontSize='subheading' fontWeight='bold' >{props.tabName}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;