import React from 'react'
import { useNavigate } from 'react-router-dom';

function PackageCard({ packageName, date, rooms, adults, children, infants, themes, places, price }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/SelectedPackage', { 
            state: { 
                packageName, 
                date, 
                rooms, 
                adults, 
                children, 
                infants, 
                themes, 
                places,
                price 
            } 
        });
    };

    return (
        <div className="single-package-card" onClick={handleClick}>
            <p>{packageName}</p>
            <p>Price:{price}</p>
        </div>
    );
}

export default PackageCard;