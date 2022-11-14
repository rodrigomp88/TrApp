import { Link } from "react-router-dom";
import { FormSignUp, AuthLayout } from "../../components";

const SignUp = () => (
  <AuthLayout>
    <h2 className="text-3xl font-bold pl-3">Sign Up</h2>
    <FormSignUp />
    <div className="flex justify-between text-base mt-20">
      <Link to="/login" className="font-bold text-pink-700">
        Login
      </Link>
    </div>
  </AuthLayout>
);

export default SignUp;
