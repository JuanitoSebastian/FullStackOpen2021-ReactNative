import { View, StyleSheet } from 'react-native';
import Text from './Text';



const AppBarTab = (props) => {

  const styles = StyleSheet.create({
    tabItemContainer: {
      flexGrow: 0
    }
  });

  return (
    <View style={styles.tabBarFlexItem}>
      <Text color='tabBarHeading' fontSize='subheading' fontWeight='bold' >{props.tabName}</Text>
    </View>
  );
};

export default AppBarTab;