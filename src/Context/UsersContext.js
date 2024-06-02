import { createContext, useState } from "react";
import user1 from '../assets/users/user1.png'
import user2 from '../assets/users/user2.png'
import user3 from '../assets/users/user3.png'
import user4 from '../assets/users/user4.png'
import user5 from '../assets/users/user5.png'
import user6 from '../assets/users/user6.png'
import user7 from '../assets/users/user7.png'
import user8 from '../assets/users/user8.png'
import user9 from '../assets/users/user9.png'
import user10 from '../assets/users/user10.png'
import user11 from '../assets/users/user11.png'
import user12 from '../assets/users/user12.png'
import user13 from '../assets/users/user13.png'
import user14 from '../assets/users/user14.png'
import user15 from '../assets/users/user15.png'
import user16 from '../assets/users/user16.png'
import user17 from '../assets/users/user17.png'
import user18 from '../assets/users/user18.png'
import user19 from '../assets/users/user19.png'

import qr1 from '../assets/QRs/1.png'
import qr2 from '../assets/QRs/2.png'
import qr3 from '../assets/QRs/3.png'
import qr4 from '../assets/QRs/4.png'
import qr5 from '../assets/QRs/5.png'
import qr6 from '../assets/QRs/6.png'
import qr7 from '../assets/QRs/7.png'
import qr8 from '../assets/QRs/8.png'
import qr9 from '../assets/QRs/9.png'
import qr10 from '../assets/QRs/10.png'
import qr11 from '../assets/QRs/11.png'
import qr12 from '../assets/QRs/12.png'
import qr13 from '../assets/QRs/13.png'
import qr14 from '../assets/QRs/14.png'
import qr15 from '../assets/QRs/15.png'
import qr16 from '../assets/QRs/16.png'
import qr17 from '../assets/QRs/17.png'
import qr18 from '../assets/QRs/18.png'
import qr19 from '../assets/QRs/19.png'

export let usersContext = createContext(0);

export default function UsersContextProvider({ children }) {

    var min = 10000000;
    var max = 99999999;
    var rand = Math.floor(min + (Math.random() * (max - min)));
    let usersData = [
        { id: 1, img: user1, code: rand, name: "محمد محمد بيومى السقا", nameEng: "Mohamed Mohamed Bayoumi Elsaka", career: "طبيب اسنان", passportNum: "A35495787", birthDate: "25/07/1984", qr: qr1 },
        { id: 2, img: user2, code: rand, name: "اسلام عبد الرازق محمد عبد الرازق", nameEng: "Islam AbdElrazek Mohamed AbdElrazek", career: "طبيب", passportNum: "A32441364", birthDate: "10/10/1986", qr: qr2 },
        { id: 3, img: user3, code: rand, name: "متولى على متولى على", nameEng: "Metwally Ali Metwally Ali", career: "طبيب", passportNum: "A32585741", birthDate: "02/01/1984", qr: qr3 },
        { id: 4, img: user4, code: rand, name: "خالد محمد محمد رزق", nameEng: "Khaled Mohamed Mohamed Rizk", career: "طبيب", passportNum: "A30779523", birthDate: "17/04/1986", qr: qr4 },
        { id: 5, img: user5, code: rand, name: "اسماعيل محمد صبرى محمد", nameEng: "Ismail Mohamed Sabry Mohamed", career: "طبيب", passportNum: "A21636152", birthDate: "04/03/1986", qr: qr5 },
        { id: 6, img: user6, code: rand, name: "السيد محمد السيد الغرباوى", nameEng: "ُElsayed Mohamed Elasyed Elgharabawy", career: "حر", passportNum: "A28504983", birthDate: "17/10/1978", qr: qr6 },
        { id: 7, img: user7, code: rand, name: "محمد عسكر عبد الكريم عبد الرحمن", nameEng: "ُMohamed Asskar Abdelkarim", career: "عامل", passportNum: "A32717928", birthDate: "18/08/1983", qr: qr7 },
        { id: 8, img: user8, code: rand, name: "على صبرى على سليمان", nameEng: "ُAli Sabry Ali Souliman", career: "نائب مدير بنك", passportNum: "A32717928", birthDate: "01/07/1978", qr: qr8 },
        { id: 9, img: user9, code: rand, name: "ابراهيم محمد عوض على", nameEng: "ُIbrahim Mohamed Awad Ali", career: "عامل", passportNum: "A30384053", birthDate: "06/08/1990", qr: qr9 },
        { id: 10, img: user10, code: rand, name: "السيد خلف الله بدرى مبارك", nameEng: "ُElsayed Khalaf Allah Badry Moubarak", career: "عامل", passportNum: "A32437854", birthDate: "03/11/1971", qr: qr10 },
        { id: 11, img: user11, code: rand, name: "مؤمن سمير سيد محمد سليمان", nameEng: "ُMoamen Samir Sayed Mohamed", career: "نائب مدير بنك", passportNum: "A31742421", birthDate: "19/12/1972", qr: qr11 },
        { id: 12, img: user12, code: rand, name: "خيرى ابو الخير فرج عبد الجواد", nameEng: "ُKhairy Aboelkhair Farag Abdelwahab", career: "بدون عمل", passportNum: "A30481163", birthDate: "21/04/1962", qr: qr12 },
        { id: 13, img: user13, code: rand, name: "عصام محمد مصطفى والى", nameEng: "ُEssam Mohamed Mostafa WalY", career: "بدون عمل", passportNum: "A36504982", birthDate: "13/06/1959", qr: qr13 },
        { id: 14, img: user14, code: rand, name: "وفاء ابو الخير فرج عبد الجواد", nameEng: "ُWafaa Aboelkhair Farag Abdelwahab", career: "ربة منزل", passportNum: "A21544271", birthDate: "13/08/1968", qr: qr14 },
        { id: 15, img: user15, code: rand, name: "عبد الحميد مبروك عبد الحميد رمضان", nameEng: "ُAbdelhamid Mabrouk Abdelmaid Ramadan", career: "بدون عمل", passportNum: "A36802819", birthDate: "23/11/1951", qr: qr15 },
        { id: 16, img: user16, code: rand, name: "اشرف عبد الهادى محمد جاد الله", nameEng: "ُAshraf Abdelhady Mohamed Gadallah", career: "بدون عمل", passportNum: "A36720893", birthDate: "25/03/1960", qr: qr16 },
        { id: 17, img: user17, code: rand, name: "ندره عبد المغنى احمد الشايب", nameEng: "ُNadra Abdelmoghny Ahmed Elshayed", career: "بدون عمل", passportNum: "A36571124", birthDate: "22/08/1964", qr: qr17 },
        { id: 18, img: user18, code: rand, name: "احمد خيرى ابو الخير عبد الجواد", nameEng: "ُAhmed khairy Abo Elkhair", career: "عامل", passportNum: "A30136931", birthDate: "11/01/1988", qr: qr18 },
        { id: 19, img: user19, code: rand, name: "محمود عبد العزيز البكرى جوهر", nameEng: "ُMahmoud Abd Elaziz elbakry", career: "عامل", passportNum: "A36659828", birthDate: "06/08/1985", qr: qr19 },
        
    ]
    return <usersContext.Provider value={usersData}>
        {children}
    </usersContext.Provider>
}