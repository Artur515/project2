import React from 'react';



const Loader = (props) => {
    const word = props.props.split('').reverse()

    return (
        <div className='loader'>
            {word.map((char) => {
                return <div key={char}>{char}</div>
            })}
        </div>
    );
};

export default Loader;