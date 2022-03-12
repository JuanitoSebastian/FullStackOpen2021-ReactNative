import { View, Pressable, StyleSheet } from 'react-native';
import Text from "../Text";
import { Formik } from 'formik';
import theme from '../../theme';
import * as yup from 'yup';
import FormikTextInput from '../Forms/FormikTextInput';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const SignIn = () => {

  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View testID='signInForm'>
      <SignInContainer onSubmit={onSubmit} />
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3)
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  });

  const initialValues = {
    username: '',
    password: ''
  };

  const styles = StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.contentBackground,
      padding: 12
    }
  });

  return (
    <View style={styles.formContainer}>
      <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    submitButton: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: 6
    },
    submitText: {
      textAlign: 'center'
    }
  });

  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput secureTextEntry={true} name='password' placeholder='Password' />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text color='tabBarHeading' fontWeight='bold' style={styles.submitText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;