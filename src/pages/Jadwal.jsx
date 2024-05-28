import React, { useState } from 'react'

export default function Jadwal() {
    let employees = [
        { name: "Hamdino", weekShifts: 0, monthShifts: 0 },
        { name: "Waleed", weekShifts: 0, monthShifts: 0 },
        { name: "Rawan", weekShifts: 0, monthShifts: 0 },
        { name: "Talaat", weekShifts: 0, monthShifts: 0 },
        { name: "Khaled", weekShifts: 0, monthShifts: 0 },
        { name: "Melad", weekShifts: 0, monthShifts: 0 },
        { name: "Aya", weekShifts: 0, monthShifts: 0 },
        { name: "Zezo", weekShifts: 0, monthShifts: 0 },
        { name: "Nadia", weekShifts: 0, monthShifts: 0 },
        { name: "Abdo", weekShifts: 0, monthShifts: 0 },
    ];
    let daysOfMonth = 30;
    // let Fridays = 4;
    // let shifts = (daysOfMonth * 6) - (Fridays * 3);
    let shifts = (daysOfMonth * 6);
    // let employeesShifts = (shifts / employees.length);
    let numOfTerminals = 3;
    // let empls = [...employees]
    let [empls, setEmpls] = useState([...employees])
    let minimum = 0;
    let maximum = empls.length;
    let [randomEmployee, setRandomEmployee] = useState(Math.floor(minimum + (Math.random() * (maximum - minimum))));

    let daysArr = [];
    let shiftsArr = [];
    let variabs = []
    let day=0;
    for (let x = 0; x < numOfTerminals * 2; x++) {          //filling shiftArr to make loop on it
        variabs.push(`emp${x}`);
    }
    for (let i = 0; i < daysOfMonth; i++) {               //filling dayArr to make loop on it
        // daysArr[i].day=i+1;  
        shiftsArr.push({day:i});
        console.log(`variables : ${variabs}`);
        // daysArr[i].variabs={};
        for (let b = 0; b < numOfTerminals * 2; b++) {          //filling shiftArr to make loop on it
            daysArr[i][`emp[b]`]=employees[b].name;
            //        .emp1    :   Ali
            //        .emp2    :   Ahmed
            //        .emp3    :   Hesham
        }
    }
    console.log(daysArr);
    // function changEmp(index){
    //     setEmpls(empls.filter(item => item !== empls[index]));
    //     setRandomEmployee(Math.floor(minimum + (Math.random() * (maximum - minimum))));
    // }
    return (
        <div>
            <table class="table table-striped">
                
            </table>
            
        </div>
    )
}
