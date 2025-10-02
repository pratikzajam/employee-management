import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmployeeList from './Components/EmployeeList'
import AddEmployeeModal from './Components/AddEmployeeModal'
import EditEmployeeModal from './Components/EditEmployeeModal'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <AddEmployeeModal />
      <EditEmployeeModal />
      <EmployeeList />
    </>
  )
}

export default App
