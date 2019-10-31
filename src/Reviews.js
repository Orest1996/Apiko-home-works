import React, {useState, useEffect} from 'react';
import ReviewLink from "./ReviewLink";

const Reviews = ({setIsNav}) => {
    const listFromLocalStorage = localStorage.getItem('list');
    const parsedList = JSON.parse(listFromLocalStorage);
    const [list, setList] = useState(parsedList || []);
    const [inputValue, setInputValue] = useState('');

    const clickHandler = () => {
        setList([...list, inputValue]);
        setInputValue('');
    };

    useEffect(() => {
        const stringifiedList = JSON.stringify(list);
        localStorage.setItem('list', stringifiedList)
    }, [list]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={clickHandler}>Add</button>
            <button onClick={() => setList([])}>Clear list</button>
            {
                list
                    ? <ul>
                        {list.map((item, index) => {
                            return <ReviewLink setIsNav={setIsNav} key={index}>{item}</ReviewLink>
                        })}
                    </ul>
                    : null
            }
        </div>
    )
};

export default Reviews
