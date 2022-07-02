import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
    return (
        <div className="driverCard">
            <img src={img} alt="driver photo" />
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <span className="car">
                    {model} - {licensePlate}
                </span>
            </div>
            );
}

        export default DriverCard;