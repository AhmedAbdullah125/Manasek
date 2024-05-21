import React, { useContext } from 'react'

import card1 from '../../assets/card.png'

import { useLocation } from 'react-router-dom';
import { usersContext } from '../../Context/UsersContext'

export default function Card(arr) {
    let usersData = useContext(usersContext);
    var min = 10000000;
    var max = 99999999;
    var rand = Math.floor(min + (Math.random() * (max - min)));
    let location = useLocation();
    let userNum = location.pathname.slice(6);
    return (
        <div className='card' style={{ backgroundImage: `url(${card1})` }}>
            <div className="content">
                <div className="img-cont">
                    <img src={usersData[userNum - 1].img} alt="" />
                </div>
                <p className='arabicName'>{usersData[userNum - 1].name}</p>
                <p className='englishName'>{usersData[userNum - 1].nameEng}</p>
                <p className='id-num'>{usersData[userNum - 1].passportNum}</p>
                <div className="qr1-cont">
                    <img src={usersData[userNum - 1].qr} alt="" />
                </div>
                <p className='random'>{rand}</p>
            </div>
        </div>
    )
}
