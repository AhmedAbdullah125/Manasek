import React, { useContext } from 'react'

import card1 from '../../assets/cardBack.png'

import { useLocation } from 'react-router-dom';
import { usersContext } from '../../Context/UsersContext';

export default function CardsBack() {
    let location = useLocation();
    let userNum = location.pathname.slice(10);
    let usersData = useContext(usersContext);

    return (
        <div className='card-back card' style={{ backgroundImage: `url(${card1})` }}>
            <div className="content">
                <div className="qr1-cont">
                    <img src={usersData[userNum-1].qr} alt="" />
                </div>
            </div>
        </div>
    )
}
