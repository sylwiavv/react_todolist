import React, { useState } from 'react';
import {Wrapper} from "../List/List.styles";
import {WrapperLi} from "../ListItem/ListItem.styles";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoRemove from "../ToDoRemove/ToDoRemove";
import ToDoIsDone from "../ToDoIsDone/ToDoIsDone";

const ToDo = () => {
    const [todos, setTodos] = React.useState([]);

    const addToDo = text => {
        const newToDos = [ ...todos, { text, isCompleted: false }];
        setTodos(newToDos);
    }

    return (
        <>
            <ToDoForm addToDo={addToDo} />
            <Wrapper className="list-todo">
                {todos.map((todo, index) => (
                    <WrapperLi
                        className="item-todo"
                        key={index}
                        index={index}
                    >
                        <ToDoIsDone
                            todos={todos}
                            isCompleted={false}
                            index={index}
                            setTodos={setTodos} />
                        {todo.text}
                        <ToDoRemove
                            todos={todos}
                            setTodos={setTodos}
                            index={index} />
                    </WrapperLi>
                ))}
            </Wrapper>
        </>
    );
}

export default ToDo;