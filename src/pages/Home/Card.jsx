import React from 'react'
import user1 from '../../assets/user1.png'
import card1 from '../../assets/card.png'
import qr1 from '../../assets/QRs/1.png'


export default function Card() {
    var min = 1000000;
    var max = 9999999;
    var rand = Math.floor(min + (Math.random() * (max - min)));

    let usersData = [
        { id: 1, img: user1, code: rand, name: "عبد الرحمن ابراهيم امين عبد الحميد",nameEng:"Abdulrahman Ibrahim Amen", career: "عامل", passportNum: "A30362793", birthDate: Date("06/04/1990"), qr:qr1},
    ]
    return (
        <div className='card' style={{ backgroundImage: `url(${card1})` }}>
            <div className="content">
                <div className="img-cont">
                    <img src={user1} alt="" />
                </div>
                <p className='arabicName'>{usersData[0].name}</p>
                <p className='englishName'>{usersData[0].nameEng}</p>
                <p className='id-num'>{usersData[0].passportNum}</p>
                <div className="qr1-cont">
                    <img src={usersData[0].qr} alt="" />
                </div>
            </div>
        </div>
    )
}
