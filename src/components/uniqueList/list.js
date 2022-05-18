import React from "react";

const todos = [
    {
        "title": "title1",
        "sub": "sub1"
    },
    {
        "title": "title2",
        "sub": "sub1"
    },
    {
        "title": "title3",
        "sub": "sub1"
    },
    {
        "title": "title4",
        "sub": "sub1"
    }
    
];

const List = () => {
    return <div>
        {todos.map((todo, index) => { 
            return <div key={index}>
                <h1>{todo.title}</h1>
                <p>{todo.sub}</p>
            </div>
        })}
    </div>;
    
}

export default List;