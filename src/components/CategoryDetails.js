import React, { useState } from 'react';
import Button from "./Button";
import TodoItem from "./TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { rootStore as store } from "../stores/RootStore";
import { observer } from "mobx-react";

const CategoryDetails = ({categoryDetails, categoryNumber}) => {
    const [isInput, setIsInput] = useState(false);

    return (
        categoryDetails
            ? <div className="category-details">
                <h4>{categoryDetails.title} <span><FontAwesomeIcon color="gray" size="sm" icon={faEllipsisH}/></span></h4>
                <ul className="todo-list">
                    {
                        categoryDetails.title === "Favorites"
                            ? store.getFavorites().map(todo => {
                                return <TodoItem key={todo.id} todo={todo}>{todo.task}</TodoItem>
                            })
                            : categoryDetails.todos.map(todo => {
                                return <TodoItem key={todo.id} todo={todo}>{todo.task}</TodoItem>
                            })
                    }
                </ul>
                <Button
                    categoryNumber={categoryNumber}
                    title={categoryDetails.title}
                    isGroupList={false}
                    isInput={isInput} onClick={setIsInput}
                >Add Task</Button>
            </div>
            :
            <div className="category-details"><h1>NO DATA</h1></div>
    )
};

export default observer(CategoryDetails)
