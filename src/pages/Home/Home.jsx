import React, { useContext } from 'react'
import wezarah from '../../assets/1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation } from 'react-router-dom';
import { usersContext } from '../../Context/UsersContext'

export default function Home() {
  let usersData = useContext(usersContext);
  return (

    <div className='home'>
      <div className="navB">
        <p className='Logo'>الاندلس للسياحه</p>
        <LazyLoadImage src={wezarah}></LazyLoadImage>
      </div>
      <div className="cards-cont">
        {usersData.map((ele) =>
          <Link to={`/card/${ele.id}`}>
            <div className="item">
              <div className="img-cont">
                <img src={ele.img} alt="user" />
              </div>
              <p>{ele.name}</p>
              <p>{ele.nameEng}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
