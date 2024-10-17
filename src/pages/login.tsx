import FormLogin from "../components/fragments/FormLogin"
import AuthLayout from "../components/layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout type="login" title="Login">
      <FormLogin />
    </AuthLayout>
  )
}

export default LoginPage