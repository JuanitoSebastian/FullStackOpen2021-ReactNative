import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {

  const styles = StyleSheet.create({
    textInput: {
      borderColor: theme.colors.backdrop,
      borderWidth: 2,
      borderRadius: 6,
      padding: 12,
      marginTop: 4,
      marginBottom: 4
    }
  });

  return (
    <NativeTextInput style={styles.textInput} {...props} />
  );

};


export default TextInput;
