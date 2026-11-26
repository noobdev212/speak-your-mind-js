import { Routes, Route } from 'react-router'
import SignPage from './pages/SignPage'
import useSocket from './hooks/useSocket.ts'

function App() {
  const {status, messages, send} = useSocket('ws://localhost:8001');

  return (
    <Routes>
      <Route path='/register' element={<SignPage/>}/>
      <Route path='/login' element={<SignPage/>}/>
    </Routes>
  )
}

export default App
