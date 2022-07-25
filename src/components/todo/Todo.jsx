import React from 'react';
import { useState } from 'react';
import './style.css';



function Todo({title, content, done, setContent, setTodos}) {

    return (
        <div>
                <div className='todo'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <button className='delete'>삭제하기</button>
                    <button className='complate'>완료</button>
                </div>

        </div>
    )
}
{/* <h3>리액트 공부하기</h3>
            <p>리액트 기초를 공부해봅시다</p>
            <button className='delete'>삭제하기</button>
            <button className='complate'>완료</button> */}

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