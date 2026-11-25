import { useResolvedPath } from 'react-router'
import SignIn from './SignIn.module.tsx'
import SignUp from './SignUp.module.tsx'

export default function SignPage() {
  const path = useResolvedPath('');

  return(
    <>
      {path.pathname === '/register' ? (<SignUp/>):(<SignIn/>)}
    </>
  );
}
