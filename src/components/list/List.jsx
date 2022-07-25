import React from 'react';
import Todo from '../todo/Todo';
import './style.css';

function List({title, content, todos, setTitle,setContent, setTodos }){

    return(
        <div>
            <div className='working'>
                <h3>Working..🔥</h3>
                <div style={{display: 'flex'}}>
                {todos.map((data) => (
                    <Todo key={data.id} title={data.title} content={data.content}  done={data.done} setContent={setContent} setTodos={setTodos}  />
                ))}
                </div>
            </div>
            <div className='done'>
                <h3>Done..🎖</h3>
            </div>
        </div>
    )
}




export default List