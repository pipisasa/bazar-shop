import React, { useContext } from "react";
import SignInForm from "./SignIn";
import SignOutForm from "./SignUp";
import ForgotPassForm from "./ForgotPass";
import SignUpSuccessForm from './SignUpSuccess';
import { AuthContext } from "contexts/auth/auth.context";

export default function AuthenticationForm() {
  const { authState } = useContext<any>(AuthContext);
  switch(authState.currentForm){
    case 'signIn':
      return <SignInForm/>;
    case 'loading':
    case 'signUp':
      return <SignOutForm/>;
    case 'signUpSuccess':
      return <SignUpSuccessForm/>;
    case 'forgotPass':
      return <ForgotPassForm/>;
  }
  // return <SignInForm/>;
}
