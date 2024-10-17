import { Link } from "react-router-dom";

interface AuthProps {
  type: string;
  title: string;
  children: React.ReactNode;
}

interface NavProps {
  type: string;
}

const AuthLayout = (props: AuthProps) => {
  const {type, title, children} = props;
  return (
    <div style={{backgroundColor: '#2C3338'}} className="flex items-center justify-center h-screen">
      <div style={{backgroundColor: '#2C3338'}} className="justify-center w-full max-w-lg p-12 rounded-lg shadow-2xl border-1">
        <div className="justify-center mb-5 font-bold text-white ">
          <h1 style={{color: '#EA4C88'}} className="text-3xl">{title}</h1>
          <h1 className="mt-3 font-medium">Welcome, Please enter your details</h1>
        </div>
        {children}
        <Navigation type={type}></Navigation>
      </div>
    </div>
  )
}

const Navigation = (props: NavProps) => {
  const { type } = props;
  if (type === "login"){
    return (
      <p style={{color: '#606468'}} className="flex justify-center mt-5">
        Dont have an account?&nbsp;
        <Link to='/register' className="text-white">Sign up now</Link>
      </p>
    )
  }
}

export default AuthLayout