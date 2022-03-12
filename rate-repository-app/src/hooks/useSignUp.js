import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutation, result] = useMutation(CREATE_USER);

  const createUser = async (credentials) => {
    const { username, password } = credentials;
    const repsonse = await mutation({ variables: { user: { username, password } }});
    return repsonse;
  };

  return [createUser, result];

};

export default useSignUp;