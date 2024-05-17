import React from 'react'
import user1 from '../../assets/users/user1.png'
import user2 from '../../assets/users/user2.png'
import user3 from '../../assets/users/user3.png'
import card1 from '../../assets/card.png'
import qr1 from '../../assets/QRs/1.png'
import qr2 from '../../assets/QRs/2.png'
import qr3 from '../../assets/QRs/3.png'
import { useLocation } from 'react-router-dom';

export default function Card() {
    var min = 10000000;
    var max = 99999999;
    var rand = Math.floor(min + (Math.random() * (max - min)));
    let location = useLocation();
    let userNum = location.pathname.slice(6);
    let usersData = [
        { id: 1, img: user1, code: rand, name: "محمد محمد بيومى السقا", nameEng: "Mohamed Mohamed Bayoumi Elsaka", career: "طبيب اسنان", passportNum: "A35495787", birthDate: "25/07/1984",qr:qr1},
        { id: 2, img: user2, code: rand, name: "اسلام عبد الرازق محمد عبد الرازق", nameEng: "Islam AbdElrazek Mohamed AbdElrazek", career: "طبيب", passportNum: "A32441364", birthDate: "10/10/1986",qr:qr2},
        { id: 3, img: user3, code: rand, name: "متولى على متولى على", nameEng: "Metwally Ali Metwally Ali", career: "طبيب", passportNum: "A32585741", birthDate: "02/01/1984",qr:qr3},
    ]
    return (
        <div className='card' style={{ backgroundImage: `url(${card1})` }}>
            <div className="content">
                <div className="img-cont">
                    <img src={usersData[userNum-1].img} alt="" />
                </div>
                <p className='arabicName'>{usersData[userNum-1].name}</p>
                <p className='englishName'>{usersData[userNum-1].nameEng}</p>
                <p className='id-num'>{usersData[userNum-1].passportNum}</p>
                <div className="qr1-cont">
                    <img src={usersData[userNum-1].qr} alt="" />
                </div>
                <p className='random'>{rand}</p>
            </div>
        </div>
    )
}
