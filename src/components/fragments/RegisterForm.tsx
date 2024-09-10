import InputForm from "../elements/input/AuthInput"
import loginImage from '../../assets/login.png'
import emailImage from "../../assets/email.png"
import registerImage from "../../assets/password.png"
import calendarImage from "../../assets/calendar.png"
import Button from "../elements/buttons/Button"

const RegisterForm = () => {
  return (
    <form action="POST">
      <div className="mb-6 rounded-lg">
        <div className="flex gap-5">
          <InputForm placeholder="First Name" type="text" image={loginImage}></InputForm>
          <InputForm placeholder="Last Name" type="text" image={loginImage}></InputForm>
        </div>
        <InputForm placeholder="Username" type="text" image={loginImage}></InputForm>      
        <InputForm placeholder="Email" type="email" image={emailImage}></InputForm>
        <InputForm placeholder="Password" type="password" image={registerImage}></InputForm>
        <InputForm placeholder="Date Of Birth" type="date" image={calendarImage}></InputForm>
      </div>
      <Button color='#EA4C88'>Register</Button>
    </form>
  )
}

export default RegisterForm