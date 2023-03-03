import { useState } from 'react'
import Employee from './components/Employee'


function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;

  return (
    <div className='App'>
      {showEmployees ? (
        <>
            <input type="text" onChange={(e) => {
              console.log(e.target.value)
              setRole(e.target.value)
          }} 
        
          />
            <Employee name="Caleb" role='Developer'/>
            <Employee name="Maria" role={role} />
            <Employee name="Carl" />
        </>
        ) : (
          <p>You cannot see the employees</p>
        )}
    </div>
  )
}

export default App