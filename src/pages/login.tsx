import LoginForm from "../components/fragments/LoginForm"
import AuthLayout from "../components/layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout type="login" title="Login" >
      <LoginForm></LoginForm>
    </AuthLayout>
  )
}

export default LoginPage