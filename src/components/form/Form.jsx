import React from 'react';
import { useState } from 'react';
import './style.css';




function Form({title,content,todos,setTitle ,setContent, setTodos,addlist}) {
    return (
        <div className='form'>
            <div className='form_box'>
                <p>제목</p>
                <input type='text'
                    
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        //console.log(title);
                    }}
                ></input>
            </div>
            <div className='form_box'>
                <p>내용</p>
                <input type='text'
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                        //console.log(content);
                    }}></input>
            </div>
            <button onClick={() => {
                console.log(title, content);
                console.log(todos);
                setTodos([...todos, {
                    id: todos.length+1, 
                    title: title ,
                    content : content,
                    done : false
                    
                }
            ]);
            
            }}>추가하기</button>
        </div>
    )
}

export default Form;