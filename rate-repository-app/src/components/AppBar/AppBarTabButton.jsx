import { View, StyleSheet, Pressable } from 'react-native';
import Text from '../Text';

const AppBarTabLink = (props) => {

  const styles = StyleSheet.create({
    tabItemContainer: {

    }
  });

  return (
    <View style={styles.tabBarFlexItem}>
      <Pressable onPress={props.action}>
        <Text color='tabBarHeading' fontSize='subheading' fontWeight='bold' >{props.tabName}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTabLink;