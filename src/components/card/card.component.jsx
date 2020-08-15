import React from 'react';

import './card.styles.css';

export const Card = ({ robot }) => (
    <div className="card-container">
        <img alt="robot" src={`https://robohash.org/${robot.id}?set=set1&size=200x200`} />
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
        <p>Número de serie: {robot.address.zipcode}</p>
    </div>
);