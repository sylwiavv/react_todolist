import React, { useState } from 'react';
import { Input } from "../Input/Input.styles";

const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = React.useState("");

    const handleOnSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addToDo(value);
        setValue("");
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <Input
                    id="input-todo"
                    type="text"
                    placeholder="Add your todo"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                >
                </Input>
            </form>
        </>
    );
}

export default ToDoForm;