import React, { useContext } from 'react'
import wezarah from '../../assets/1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation } from 'react-router-dom';
import { usersContext } from '../../Context/UsersContext'

export default function Users() {
    let usersData = useContext(usersContext);

    var min = 10000000;
    var max = 99999999;
    var rand = Math.floor(min + (Math.random() * (max - min)));
    let location = useLocation();
    let userNum = location.pathname.slice(7);

    return (
        <div className='home'>
            <div className="navB">
                <div className="user-img-cont"><LazyLoadImage src={usersData[userNum - 1].img} className='user-img'></LazyLoadImage></div>
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
                    <p>{usersData[userNum - 1].name}</p>
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
                    <p>{usersData[userNum - 1].passportNum}</p>
                </div>
            </div>
            <div className="data-items arabic">
                <div className="item">
                    <div className="title">
                        <p>تاريخ الميلاد</p>
                        <p>Birth date</p>
                    </div>
                    <p>{usersData[userNum - 1].birthDate}</p>
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
