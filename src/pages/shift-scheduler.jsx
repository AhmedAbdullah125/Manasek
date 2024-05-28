import React from 'react'
import { useState } from 'react';

export default function shiftScheduler() {
    const employees = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];

    const ShiftSchedulers = () => {
        const [schedule, setSchedule] = useState([]);

        const generateSchedule = () => {
            let newSchedule = [];
            let employeeIndex = 0;

            for (let day = 0; day < 7; day++) {
                let daySchedule = { day: `Day ${day + 1}`, shifts: [] };

                for (let shift = 0; shift < 2; shift++) {
                    let shiftEmployees = [];

                    for (let emp = 0; emp < 3; emp++) {
                        shiftEmployees.push(employees[employeeIndex % employees.length]);
                        employeeIndex++;
                    }

                    daySchedule.shifts.push(shiftEmployees);
                }

                newSchedule.push(daySchedule);
            }

            setSchedule(newSchedule);
        };
        return (
            <div>
                <h1>Employee Shift Scheduler</h1>
                <button onClick={generateSchedule}>Generate Schedule</button>
                <div>
                    {schedule.map((day) => (
                        <div key={day.day}>
                            <h2>{day.day}</h2>
                            {day.shifts.map((shift, index) => (
                                <div key={index}>
                                    <h3>Shift {index + 1}</h3>
                                    <ul>
                                        {shift.map((employee, idx) => (
                                            <li key={idx}>{employee}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
