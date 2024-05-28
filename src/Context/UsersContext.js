import { createContext, useState } from "react";
import user1 from '../assets/users/user1.png'
import user2 from '../assets/users/user2.png'
import user3 from '../assets/users/user3.png'
import user4 from '../assets/users/user4.png'
import user5 from '../assets/users/user5.png'
import user6 from '../assets/users/user6.png'
import user7 from '../assets/users/user7.png'
import user8 from '../assets/users/user8.png'
import qr1 from '../assets/QRs/1.png'
import qr2 from '../assets/QRs/2.png'
import qr3 from '../assets/QRs/3.png'
import qr4 from '../assets/QRs/4.png'
import qr5 from '../assets/QRs/5.png'
import qr6 from '../assets/QRs/6.png'
import qr7 from '../assets/QRs/7.png'
import qr8 from '../assets/QRs/8.png'

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
        { id: 7, img: user8, code: rand, name: "على صبرى على سليمان", nameEng: "ُAli Sabry Ali Souliman", career: "نائب مدير بنك", passportNum: "A32717928", birthDate: "01/07/1978", qr: qr8 },
        
    ]
    return <usersContext.Provider value={usersData}>
        {children}
    </usersContext.Provider>
}