import React from 'react';
import '../main.css'

const MoreButton = ({currentLength, setAmount, postsLength}) => {
    const clickHandler = (length) => {
        if ((length - 10) >= currentLength) {
            setAmount(currentLength + 10);
        } else if (length > currentLength) {
            let different = length - currentLength;
            setAmount(currentLength + different)
        } else {
            alert('All posts is already shown')
        }
    };

    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={(() => clickHandler(postsLength))}>Show more</button>
        </div>

    )
};

export default MoreButton
