import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/authContext'

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <h1>Home</h1>}/>
          <Route path='/login' element={ <LoginPage /> }/>
          <Route path='/register' element={ <RegisterPage />}/>
          <Route path='/tasks' element={ <h1>taks</h1>}/>
          <Route path='/add-task' element={ <h1>new task</h1>}/>
          <Route path='/tasks/:id' element={ <h1>task</h1>}/>
          <Route path='/profile' element={ <h1>profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
