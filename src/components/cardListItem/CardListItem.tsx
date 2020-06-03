import React from 'react';
import Car from '../../Classes/Car';

interface Props {
    car: Car
}

export const CardListItem: React.FC<Props> = ({car}) => {
    return(
        <div>
            <img/>
            <h2>{}</h2>
            <p>{car.make}</p>
            <p>{car.brand}</p>
            <p>{car.price}</p>
            <p>{car.year}</p>
            <p>{car.isNew}</p>
        </div>
    );
}