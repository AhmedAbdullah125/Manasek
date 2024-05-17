import React from 'react'
import wezarah from '../../assets/1.jpg'
import user1 from '../../assets/users/user1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation } from 'react-router-dom';

export default function Home() {
  var min = 10000000;
  var max = 99999999;
  var rand =Math.floor(min + (Math.random() * (max - min)));
  let date =new Date("2021-03-25");
  let detailedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  let location = useLocation();
  console.log(location.pathname);

  let users = [
    { id: 1, img: user1, code:rand, name:"عبد الرحمن ابراهيم امين عبد الحميد",career:"عامل",passportNum:"A30362793",birthDate:Date("06/04/1990")},
  ]


  return (
    <div className='home'>
      <div className="navB">
        <LazyLoadImage src={user1} className='user-img'></LazyLoadImage>
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
          <div><span> أ </span><span>1603161</span></div>
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
          <p>{users[0].name}</p>
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
          <p>A30362793</p>
        </div>
      </div>
      <div className="data-items arabic">
        <div className="item">
          <div className="title">
            <p>تاريخ الميلاد</p>
            <p>Birth date</p>
          </div>
          <p>06/04/1990</p>
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
