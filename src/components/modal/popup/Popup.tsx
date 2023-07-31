"use client";
import style from "./Popup.module.css";
import React, {useState} from "react";
import Donation from "../Donation";
// import { FaTimes } from "react-icons/fa";


const Popup: any = () => {
    const [showModal, setShowModal] = useState(true);

    const onClose = () => {
        setShowModal(!showModal);
    }

    if(showModal){
        return(
            <div className={style.popup}>
                <button className={style.closeIcon} onClick={onClose}>
                    &#x2715;
                </button>

                <div className={style.popupContent}>
                    <Donation />
                </div>
            </div>
        )
    }else{
        return(
            location.reload()
        )
    }
}

export default Popup