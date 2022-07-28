import React from 'react';
import { useState } from 'react';
import './style.css';



function Todo({ title, content, done, setContent, todos, setTodos, id }) {


    const onRemove = (id) => {
        let del = todos.filter((todo) => todo.id !== id);
        setTodos(del);
        // console.log(del)
    }

    const onComplate = (id) => {
        let com = todos.map((todo) => {
            if (todo.id == id) {
                todo.done = !todo.done
            }

            console.log(todo.done)
            return todo
        })
        // if(done = true){
        //     setText('취소하기')
        // }else{
        //     setText('완료하기')
        // };

        setTodos(com) 
    }

    return (
 

            <div >
                <div className='todo'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <button className='remove' onClick={() => { onRemove(id) }}>삭제하기</button>
                    <button className='complate' onClick={() => { onComplate(id) }}> {done ? '취소하기' : '완료하기'} </button>
                </div>
            </div>


    )



}


export default Todo

{/* <App>
    <TodoList>
        <Layout>
            <header></header>
            <form action=""></form>
            <list>
                <Todo></Todo>
            </list>
        </Layout>
    </TodoList>
</App> */}