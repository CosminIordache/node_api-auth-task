import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/authContext'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import ProtectedRoute from './ProtectedRoute'
import { TasksProvider } from './context/taskContext'
import Navbar from './components/Navbar'

function App() {
  return(
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
        <main className='container mx-auto px-12'>
          <Navbar/>
            <Routes>
              
              <Route path='/login' element={ <LoginPage /> }/>
              <Route path='/register' element={ <RegisterPage />}/>

              <Route element={ <ProtectedRoute/> }>
                <Route path='/' element={ <TasksPage /> }/>
                <Route path='/tasks' element={ <TasksPage/> }/>
                <Route path='/add-task' element={ <TasksFormPage/> }/>
                <Route path='/tasks/:id' element={ <TasksFormPage/> }/>
                <Route path='/profile' element={ <ProfilePage/> }/>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  )
}

export default App
