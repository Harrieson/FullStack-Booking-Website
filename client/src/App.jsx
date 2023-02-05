import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './Layout';

function App() {
  return (
<Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      </Route>

</Routes>


    
  )
}

export default App
