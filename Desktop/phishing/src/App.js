// import React from 'react'
// import axios from 'axios';

// import image from './phishing.png'

// import Wave from 'react-wavify'

// function App(){
//   const [data,setData] = React.useState([])
  
//  React.useEffect(() => {
//   axios.get('https://6361ddaa7521369cd05fa5f0.mockapi.io/sample')
//     .then((res) => {
//       setData(res.data)
//     })     
//  },[])

//  const refresh = () => {
//    window.location.reload()
//  }

//    return (
//     <div className='app'>
//       <img src={image} alt="" />
//     <h1>Total of click baited employees:</h1>
//     <div>
//       <h2>{data.length}</h2>
      
//     </div>
//     <button onClick={refresh}>Refresh</button>

//     <Wave className='wave' mask="url(#mask)" fill="#1277b0" >
//   <defs>
//     <linearGradient id="gradient" gradientTransform="rotate(90)">
//       <stop offset="0" stopColor="white" />
//       <stop offset="0.5" stopColor="black" />
//     </linearGradient>
//     <mask id="mask">
//       <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
//     </mask>
//   </defs>
// </Wave>
//     </div>
 
//   )
// }


// export default App;















import React from "react";
import axios from "axios";

function App() {
  const [ employee, setEmployee] = React.useState(0);
  const countHandle =  async () => {
    await axios.post('https://6361ddaa7521369cd05fa5f0.mockapi.io/sample',{
      employee
    })
    setEmployee(employee + 1)
  }

  React.useEffect(() => {
    countHandle()

  }, [])


  return (
    <div className="app">
      <h1>
      Successfully Validated!
      </h1>
      <h3>
        You can exit the page now..
      </h3>
    </div>
  );
}

export default App;
