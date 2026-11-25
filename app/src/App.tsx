import { Routes, Route } from 'react-router'
import { getSync, postAck } from './services/TestService.ts'

function App() {
  getSync().then(response => {
    console.log(JSON.stringify(response));
  }).catch(err => console.error(err));

  postAck().then(response => {
    console.log(JSON.stringify(response));
  }).catch(err => console.error(err));

  return (
    <Routes>
      <Route path='/' element={<h1>hello</h1>}/>
    </Routes>
  )
}

export default App
