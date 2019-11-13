import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react";
import { TodoItemHoc } from "../hoc/TodoItemHoc";

const TodoItem = ({children, todo, correctIcon}) => {

    return (
        <Fragment>
            <li className="todo-link">
                <span onClick={() => todo.toggleCompleted()}>{correctIcon(todo.isCompleted)}<span
                    className={todo.isCompleted ? "todo-task completed" : "todo-task"}
                >{children}</span>
                </span>
                <span className="hoverPointer" onClick={() => todo.toggleFavorite()}>
                    <FontAwesomeIcon color="#0178d7"  icon={todo.isFavorite ? faStar : faStarHalf} />
                </span>
            </li>
            <hr/>
        </Fragment>
        )
};

export default TodoItemHoc(observer(TodoItem))
