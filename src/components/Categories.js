import React, { useState } from 'react';
import { rootStore as store } from "../stores/RootStore";
import { values } from "mobx";
import Button from "./Button";
import Category from "./Category";
import { observer } from "mobx-react";

const Categories = ({categoryNumber, setCategoryNumber}) => {
    const [isInput, setIsInput] = useState(false);

    return (
            <div className="categories">
                <ul>
                    {
                        values(store.groups.list).map((category, index) => {
                            return <Category
                                index={index}
                                categoryNumber={categoryNumber}
                                setCategoryNumber={setCategoryNumber}
                                key={category.id}
                            >
                                {category}
                            </Category>
                        })
                    }
                </ul>
                <Button
                    isGroupList={true}
                    isInput={isInput}
                    onClick={setIsInput}
                >New List</Button>
            </div>
        )
};

export default observer(Categories)
