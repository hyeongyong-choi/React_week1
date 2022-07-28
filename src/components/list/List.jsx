import React from 'react';
import Todo from '../todo/Todo';
import './style.css';

function List({title, content, todos, setTitle,setContent, setTodos,onRemove}){

    return(
        <div>
            <div className='working'>
                <h3>Working..🔥</h3>
                <div style={{display: 'flex', flexWrap: 'wrap'}} >
                {todos.map((data)=>
                  data.done ===false?  <Todo key={data.id} title={data.title} content={data.content}  done={data.done} setContent={setContent} setTodos={setTodos} onRemove={onRemove} todos={todos} id={data.id}/> : null
                )}
                </div>
            </div>
            <div className='done'>
                <h3>Done..🎖</h3>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {todos.map((data)=>
                 data.done === true?  <Todo key={data.id} title={data.title} content={data.content}  done={data.done} setContent={setContent} setTodos={setTodos} onRemove={onRemove} todos={todos} id={data.id}/> :null
                 )}
                </div>
            </div>
        </div>
    )
}

export default List
