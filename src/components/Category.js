import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react";
import { rootStore as store } from "../stores/RootStore";

const Category = ({children, categoryNumber, setCategoryNumber, index}) => {

    return (
            <div className={categoryNumber === index ? "active category" : "category"}>
                <span className="hoverPointer" onClick={() => store.groups.deleteGroup(children.id)}>
                    <FontAwesomeIcon color="#0178d7" icon={faTrashAlt}/>
                </span>
                <div><span className="hoverPointer" onClick={() => setCategoryNumber(index)}>{children.title}</span></div>
                <span className="unfinished-count">{
                    children.getUncompleted()
                }</span>
            </div>
        )
};

export default observer(Category)
