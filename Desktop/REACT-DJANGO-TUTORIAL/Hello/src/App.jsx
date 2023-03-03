import { useState } from 'react'
import Employee from './components/Employee'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name:"Caleb",
        role: "Developer",
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },
      {
        name:"Haru",
        role: "Developer",
        img: 'https://images.pexels.com/photos/3536436/pexels-photo-3536436.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        name:"Jonny",
        role: "Developer",
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },

      {
        name:"Luckas",
        role: "Astronaut",
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },

      {
        name:"Mike",
        role: "Data Scientist",
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },
      {
        name:"Shain",
        role: "Business Analyst",
        img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
    ]
  )
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
           <div className='flex flex-wrap justify-center'>
              {employees.map((employee) => {
                  console.log(uuidv4())

                return (
                  <Employee 
                    key={uuidv4()} 
                    name={employee.name}
                    role={employee.role} 
                    img={employee.img} />
                )
              })}
           </div>
        </>
        ) : (
          <p>You cannot see the employees</p>
        )}
    </div>
  )
}

export default App