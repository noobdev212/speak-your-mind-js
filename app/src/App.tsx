import { Routes, Route } from 'react-router'
import SignPage from './pages/SignPage'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<SignPage/>}/>
      <Route path='/login' element={<SignPage/>}/>
      <Route path='/chat' element={<ChatPage/>}/>
    </Routes>
  )
}

export default App
