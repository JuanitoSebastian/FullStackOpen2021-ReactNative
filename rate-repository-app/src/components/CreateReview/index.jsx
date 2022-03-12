import Text from "../Text";
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from "../Forms/FormikTextInput";
import theme from '../../theme';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import useReview from "../../hooks/useReview";

const CreateReview = () => {

  const [review] = useReview();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required('Repository owner name is required'),
    repositoryName: yup
      .string()
      .required('Repository name is required'),
    rating: yup
      .number()
      .min(0, 'A rating has to be equal to 0 or higher')
      .max(100, 'A rating has to be equal to 100 or lower')
      .required('Rating is required'),
    text: yup
      .string()
  });

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
  };

  const styles = StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.contentBackground,
      padding: 12
    }
  });

  const onSubmit = async (values) => {
    try {
      const response = await review({ ...values, rating: Number(values.rating) });
      navigate(`/repository/${response.data.createReview.repository.id}`);
    } catch (error) {
      console.log(`Failed to post reveiew: ${error}`);
    }
  };

  return (
    <View style={styles.formContainer}>
     <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const CreateReviewForm = ({ onSubmit }) => {
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
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text color='tabBarHeading' fontWeight='bold' style={styles.submitText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReview;