import { Link } from "react-router-dom";
import background from '../../assets/background.jpg'
interface AuthProps {
  type: string;
  title: string;
  children: React.ReactNode;
}

interface DescProps {
  type: string;
}
interface NavProps {
  type: string;
}


const AuthLayout = (props: AuthProps) => {
  const {type, title, children} = props;
  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`, backgroundSize: 'cover'}} className="flex items-center justify-center h-screen">
      
      <div style={{backgroundColor: '#1B1919', borderColor: '#EA4C88'}} className="justify-center w-full max-w-lg p-12 border-2 shadow-2xl rounded-3xl">
        <div className="justify-center mb-5 font-bold text-white ">
          <h1 style={{color: '#EA4C88', fontSize: 40}} className="font-extrabold">{title}</h1>
          <Description type={type}></Description>         
        </div>
        {children}
        <Navigation type={type}></Navigation>
      </div>
    </div>
  )
}

const Description = (props: DescProps) => {
  const {type} = props;
  if (type === "login"){
    return (
      <p className="mt-3 font-medium">Welcome, Please enter your details</p>
    )
  } else if (type === "register"){
    return (
      <p className="mt-3 font-medium">Fill up the following details to Register.</p>
    )
  }
}
const Navigation = (props: NavProps) => {
  const { type } = props;
  if (type === "login"){
    return (
      <p style={{color: '#606468'}} className="flex justify-center mt-5">
        Dont have an account?&nbsp;
        <Link to='/register' className="text-white transition-all duration-300 border-b-2 border-transparent hover:border-white">Sign up now</Link>
      </p>
    )
  } else if (type === "register") {
    return (
      <p style={{color: '#606468'}} className="flex justify-center mt-5">
        Already have an account?&nbsp;
        <Link to='/login' className="text-white transition-all duration-300 border-b-2 border-transparent hover:border-white">Login</Link>
      </p>
    )
  }
}

export default AuthLayout