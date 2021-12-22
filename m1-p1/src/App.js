import React ,{useState} from 'react'
import './App.css';


import axios from 'axios'

 


function App() {
  const [arr, setstate] = useState([])
  
 
   const getData = () => {
    return axios.get("http://localhost:4000/allData")
          .then((response) =>{console.log(response.data);
          setstate(response.data)
          })
          };



          const m=arr.map((elem,i)=>{
            return <p>{elem.title}</p>
          })

  return (
    <div className="App">
     <button onClick={getData}>Get Tasks</button>


{m}
    </div>
  );
}


export default App;
