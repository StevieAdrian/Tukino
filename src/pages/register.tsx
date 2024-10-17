import RegisterForm from "../components/fragments/RegisterForm";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout type="register" title="Register">
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage;