import InputForm from '../elements/Input'
import loginImage from '../../assets/login.png'
import registerImage from '../../assets/password.png'
import Button from '../elements/buttons/Button'

const FormLogin = () => {
  return (
    <form action="POST">        
        <div className="mb-6 rounded-lg">
          <InputForm placeholder='Username' type="text" image={loginImage}></InputForm>
          <InputForm placeholder='Password' type="password" image={registerImage}></InputForm>
        </div>
        <Button color='#EA4C88'>SIGN IN</Button>
    </form>
    
  )
}

export default FormLogin