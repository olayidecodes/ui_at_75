"use client";
import style from "./Popup.module.css";
import React, {useState} from "react";
import PersonalDetails from '../Form/PersonalDetails';
import cx from "classnames";


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
                    <PersonalDetails />
                </div>
            </div>
        )
    }else{
       location.reload();
    }
}

export default Popup