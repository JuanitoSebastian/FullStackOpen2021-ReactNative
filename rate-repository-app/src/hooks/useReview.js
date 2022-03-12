import { CREATE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useReview = () => {

  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async (review) => {
    console.log(review);
    const response = await mutate({ variables: { review }});
    return response;
  };

  return [review, result];
};

export default useReview;