import Form from '../../components/Form'
import { useState } from 'react'
import { login } from '../../services/UserService.ts'
import { useNavigate } from 'react-router'

export default function SignIn() {
  const [inputs, setInputs] = useState(['', '']);
  const navigate = useNavigate();

  return (
    <Form
      inputType={['email', 'password']}
      onChange={(text, index) => {
        const newInputs = inputs;
        newInputs[index] = text;
        setInputs(newInputs);
      }}
      children={
        <>
          <button onClick={() => {
            login({
              email: inputs[0],
              password: inputs[1]
            }).then(response => {
              localStorage.setItem('id', response.payload.id);
              localStorage.setItem('email', response.payload.email);
              localStorage.setItem('role', response.payload.role);
              navigate('/');
            }).catch(err => console.error(err));
          }}>
            LOG IN
          </button>
          <button onClick={() => navigate('/register')}>
            CREATE ACCOUNT
          </button>
        </>
      }
    />
  );
}
