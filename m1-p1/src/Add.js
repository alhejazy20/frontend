import React, {useState} from 'react'

export default function Add(props) {
const [newTitle, setnewTitl] = useState("");

const creatNewTodo= function (){
    props.createFunc({title: newTitle, isCompleted:false});
}

    return (
        <div className='Add'>
            <input type= "text" placeholder="write new title here ..."onChange={(e)=>{

                    setnewTitl(e.target.value)//عشان تعرف ايش المكتوب داخل هذه الخانة ثم يتخزن داخل يوز ستيست
            }}/>
            <button onClick={creatNewTodo}>creat new todo</button>
        </div>
    )
}
