import React from 'react';

const Dimensioner = ({ direction, distance, angle }) => {
    if (direction === "horizontal") return (
        <div style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'left',
            width: `${distance}px`,
            height: '11px',
            paddingTop: '5px',
            margin: 0,
            padding: 0,
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            color: 'black',
        }}>
            <div style={{
                height: 0,
                width: '100%',
                borderBottom: '1px solid black',
                margin: 0,
                padding: 0
            }}></div>

            {distance}px
        </div>
    );

    return (
        <div>
            {distance}
        </div>
    );
};

export default Dimensioner;