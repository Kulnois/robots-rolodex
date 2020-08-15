import React from 'react';

import './card.styles.css';

export const Card = ({ robot }) => (
    <div>
        <img alt="robot" src={`https://robohash.org/${robot.id}?set=set1&size=180x180`} />
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
    </div>
);