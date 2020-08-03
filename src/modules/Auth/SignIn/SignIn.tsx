import { SignInView } from "./SignInView";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignIn>;
}

export const SingIn = ({ navigation }: Props) => {
  const signUpHandler = () => navigation.navigate(ROUTES.SignUp);
  const onSubmit = () => {};
  return <SignInView onSubmit={onSubmit} signUpHandler={signUpHandler} />;
};
