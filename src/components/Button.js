import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useButton }from '../hooks'

const Button = ({children, isInput, onClick, isGroupList, categoryNumber, title}) => {
    const [inputValue, setInputValue] = useState("");
    const [changeHandler, pressHandlerForGroup, pressHandlerForTodos] = useButton({inputValue, title, setInputValue, onClick, categoryNumber});

    return (
        <div className="button-container">
            <span className="hoverPointer" onClick={() => {onClick(true)}}>
                <FontAwesomeIcon color="#0178d7"  icon={faPlus}/>
            </span>
            {
                isInput
                    ? <input
                        id="category-input"
                        onChange={changeHandler}
                        type="text"
                        value={inputValue}
                        onKeyPress={isGroupList ? pressHandlerForGroup : pressHandlerForTodos}
                    />
                    : <span className="hoverPointer" onClick={() => {onClick(true)}}>{children}</span>
            }
        </div>
    )
};

export default Button;
