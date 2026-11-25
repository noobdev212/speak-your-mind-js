import { Routes, Route } from 'react-router'
import SignPage from './pages/SignPage'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<SignPage/>}/>
      <Route path='/login' element={<SignPage/>}/>
    </Routes>
  )
}

export default App
