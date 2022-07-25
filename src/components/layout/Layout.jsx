import React from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import Todo from '../todo/Todo';
import './style.css';
import { useState } from 'react';

function Layout() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "공부하기",
            content:"리액트",
            done : 0
            
        },
    ]);


    return (
        
        <div className='container'>
            <Header/>
            <Form title={title} content={content} todos={todos} setTitle={setTitle} setContent={setContent} setTodos={setTodos} />
            <List title={title} content={content} todos={todos} setTitle={setTitle} setContent={setContent} setTodos={setTodos} />
        </div>
    )
}

export default Layout