import Text from "../Text";
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from "../Forms/FormikTextInput";
import theme from '../../theme';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";

const SignUp = () => {

  const [singUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match!')
      .required('Password confirmation is required')
  });

  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
  };

  const styles = StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.contentBackground,
      padding: 12
    }
  });

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;
    try {
      await singUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik 
      onSubmit={onSubmit}
      initialValues={initialValues} 
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignUpForm = ({ onSubmit }) => {
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
      <FormikTextInput secureTextEntry={true} name='passwordConfirmation' placeholder='Password confirmation' />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text color='tabBarHeading' fontWeight='bold' style={styles.submitText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;