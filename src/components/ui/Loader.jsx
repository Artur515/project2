import React from 'react';



const Loader = (title) => {
    const word = title.title.split('').reverse()

    return (
        <div className='loader'>
            {word.map((char) => {
                return <div key={char}>{char}</div>
            })}
        </div>
    );
};

export default Loader;