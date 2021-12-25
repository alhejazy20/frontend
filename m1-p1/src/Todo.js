import React from 'react'

export default function Todo(props) {
   
//    const {_id,title,isCompleted}=props.task
   
    return (
        <div className='Todo'>
         <span>title: {props.task.title}</span>
         <input type="checkbox" checked={props.task.isCompleted}/>
        </div>
    )
}
