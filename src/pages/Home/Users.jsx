import React from 'react'
import wezarah from '../../assets/1.jpg'
import user1 from '../../assets/users/user1.png'
import user2 from '../../assets/users/user2.png'
import user3 from '../../assets/users/user3.png'

import qr1 from '../../assets/QRs/1.png'
import qr2 from '../../assets/QRs/2.png'
import qr3 from '../../assets/QRs/3.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation } from 'react-router-dom';

export default function Users() {
    
    var min = 10000000;
    var max = 99999999;
    var rand = Math.floor(min + (Math.random() * (max - min)));
    let date = new Date("2021-03-25");
    // let detailedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    let location = useLocation();
    let userNum = location.pathname.slice(7);

    let usersData = [
        { id: 1, img: user1, code: rand, name: "محمد محمد بيومى السقا", nameEng: "Mohamed Mohamed Bayoumi Elsaka", career: "طبيب اسنان", passportNum: "A35495787", birthDate: "25/07/1984",qr:qr1},
        { id: 2, img: user2, code: rand, name: "اسلام عبد الرازق محمد عبد الرازق", nameEng: "Islam AbdElrazek Mohamed AbdElrazek", career: "طبيب", passportNum: "A32441364", birthDate: "10/10/1986",qr:qr2},
        { id: 3, img: user3, code: rand, name: "متولى على متولى على", nameEng: "Metwally Ali Metwally Ali", career: "طبيب", passportNum: "A32585741", birthDate: "02/01/1984",qr:qr3},
    ]


    return (
        <div className='home'>
            <div className="navB">
                <LazyLoadImage src={usersData[userNum-1].img} className='user-img'></LazyLoadImage>
                <LazyLoadImage src={wezarah}></LazyLoadImage>
            </div>
            <div className="arabic hagez">
                معلومات التصريح
            </div>
            <div className="data-items arabic">
                <div className="item">
                    <div className="title">
                        <p>نوع التصريح</p>
                        <p>Permit Type</p>
                    </div>
                    <p>أفراد</p>
                </div>
                <div className="item">
                    <div className="title">
                        <p>رمز التصريح</p>
                        <p>Permit Code</p>
                    </div>
                    <div><span> أ </span><span>{rand}</span></div>
                </div>
                <div className="item">
                    <div className="title">
                        <p>المناطق المسموحه</p>
                        <p>Allowed Location</p>
                    </div>
                    <p>منى - عرفات - مزدلفه</p>
                </div>
            </div>
            <div className="arabic hagez">
                معلومات المستلم
            </div>
            <div className="data-items arabic">
                <div className="item">
                    <div className="title">
                        <p>اسم المستلم</p>
                        <p>Recepient Name</p>
                    </div>
                    <p>{usersData[userNum-1].name}</p>
                </div>
                <div className="item">
                    <div className="title">
                        <p>المهنه</p>
                        <p>Career</p>
                    </div>
                    <p>عامل</p>
                </div>
                <div className="item">
                    <div className="title">
                        <p>هوية المستلم</p>
                        <p>Recepient National</p>
                    </div>
                    <p>{usersData[userNum-1].passportNum}</p>
                </div>
            </div>
            <div className="data-items arabic">
                <div className="item">
                    <div className="title">
                        <p>تاريخ الميلاد</p>
                        <p>Birth date</p>
                    </div>
                    <p>{usersData[userNum-1].birthDate}</p>
                </div>
                <div className="item">
                    <div className="title">
                        <p>من تاريخ</p>
                        <p>From</p>
                    </div>
                    <p>4/12/1445</p>
                </div>
                <div className="item">
                    <div className="title">
                        <p>الى تاريخ</p>
                        <p>to</p>
                    </div>
                    <p>14/12/1445</p>
                </div>
            </div>
            <div className="data-items arabic">
                <div className="item">
                    <div className="title">
                        <p>جهة العمل</p>
                        <p>Company Name</p>
                    </div>
                    <p>حجاج سياحة</p>
                </div>
                <div className="item">
                    <div className="title">
                        <p>الملاحظات</p>
                        <p>Notes</p>
                    </div>
                    <p>منى - عرفات - مزدلفه</p>
                </div>

            </div>
        </div>
    )
}
