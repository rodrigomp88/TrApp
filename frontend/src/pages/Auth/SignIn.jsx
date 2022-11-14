import { Link } from "react-router-dom";
import { FormSignIn, AuthLayout } from "../../components";

const SignIn = () => (
  <AuthLayout>
    <h2 className="text-3xl font-bold pl-3">Sign In</h2>
    <FormSignIn />
    <div className="flex justify-between text-base mt-20">
      <Link to="/forgot-password">Forgot Password?</Link>
      <Link to="/signup" className="font-bold text-pink-700">
        Sign Up
      </Link>
    </div>
  </AuthLayout>
);

export default SignIn;
