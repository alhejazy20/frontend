import React ,{useState,useEffect} from 'react'
import './App.css';


import axios from 'axios'
import Todo from './Todo';
import Add from './Add';

 


function App() {


//  اسم الفنكشن   اسم القيمة
  const [ tasks , setTasks] = useState([])
  
 
   const getData = () => {
    return axios.get("http://localhost:4000/allData")
          .then((response) =>{console.log(response.data);
            setTasks(response.data)
          })
          };


 const postNewTodo = (body) => {
            // console.log("func postNewTodo from APP");
            // {"title":"task 5","isCompleted": false}
            axios
              .post(`http://localhost:4000/b`, body)
              .then((response) => {
                // console.log('RESPONSE: ', response);
                console.log("DATA: ", response.data);
                // setTasks(response.data);
                getData();
                // change react hooks state using spread operator
              })
              .catch((err) => {
                console.log("ERR: ", err);
              });
          };


          const m=tasks.map((elem,i)=>{
            return <p>{elem.title}</p>
          })


          const fg=tasks.map((taskObj,i)=>
             <Todo key={i} task={taskObj}/>
          )

          
// بدال تضغط على زر لعرض الtodo
useEffect(() => {
  getData()
}, [])

  return (
    <div className="App">
     <button onClick={getData}>Get Tasks</button>

 
      {m}
      
      {fg}
<Add  createFunc={postNewTodo}/>
    </div>
  );
}


export default App;
