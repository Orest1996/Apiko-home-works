import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const TodoItemHoc = TodoItem => ({children, todo}) => {
    const correctIcon = (isCompleted) => {
        return isCompleted
            ? <FontAwesomeIcon color="#0178d7" icon={faCheckCircle} />
            : <FontAwesomeIcon color="#0178d7" icon={faCircleNotch} />
    };

    return <TodoItem
    children={children}
    todo={todo}
    correctIcon={correctIcon}/>
};
