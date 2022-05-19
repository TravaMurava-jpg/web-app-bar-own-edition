import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import background from "../img/barimg.jpg";
import styles from "./styles.module.css"
const BookPage = () => {
    const [checkInTime, setCheckInTime] = useState(0)
    useEffect(() => {
        fetch()
    }, [checkInTime])
    const changeSelectedTime = (e) => {
        setCheckInTime(e.target.value)
    }
    return (
        <>
        <Navbar />
        <div>
        {/* <img className={styles.style1} src={background} ></img> */}
        <select onChange={changeSelectedTime} className={styles.style2}>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
        </select>
        </div>
        
        </>
    );
};

export default BookPage;