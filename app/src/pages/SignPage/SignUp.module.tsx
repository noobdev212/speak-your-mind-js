import Form from '../../components/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { register }from '../../services/UserService.ts'

export default function SignUp() {
  const [inputs, setInputs] = useState(['', '']);
  const navigate = useNavigate();

  return (
    <Form
      inputType={['email', 'password', 'password']}
      onChange={(text, index) => {
        const newInputs = inputs;
        newInputs[index] = text;
        setInputs(newInputs);
      }}
      children={
        <>
          <button onClick={() => {
            register({
              email: inputs[0],
              password: inputs[1],
              repassword: inputs[2]
            }).then(response => {
              navigate('/login');
            }).catch(err => console.error(err));
          }}>
            CREATE ACCOUNT
          </button>
          <button onClick={() => navigate('/login')}>
            CONTINUE TO LOGIN
          </button>
        </>
      }
    />
  );
}
