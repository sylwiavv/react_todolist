import React, {useState} from 'react';
import { DoneWrapper } from "./ToDoIsDone.styles";

const ToDoIsDone = () => {
    const [isDone, setIsDone] = useState(false);

    return(
        <DoneWrapper isDone={isDone} onClick={() => setIsDone(!isDone)}>
            {isDone ? 'Done' : 'ToDo'}
        </DoneWrapper>
    );
}

export default ToDoIsDone;