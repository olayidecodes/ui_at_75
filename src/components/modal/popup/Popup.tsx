"use client";
import style from "./Popup.module.css";
import React, {useState} from "react";
import PersonalDetails from '../Form/PersonalDetails';
import cx from "classnames";

interface PopupProps {
    onClose: () => void;
  }

const Popup: React.FC<PopupProps> = ({onClose}) => {

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
}

export default Popup