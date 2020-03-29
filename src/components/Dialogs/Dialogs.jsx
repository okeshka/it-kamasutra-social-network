import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = props => {
    return (
        <div className = {s.dialogs}>
            <div className = {s['dialogs-items']}> 
                <div className = {s.dialog}>
                    Oleshych
                </div>
                <div className = {s.dialog}>
                    Alex
                </div>
                <div className = {s.dialog}>
                    Helga
                </div>
                <div className = {s.dialog}>
                    Perdak
                </div>
                <div className = {s.dialog}>
                    Cherdak
                </div>
            </div>
            <div className = {s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Pruvet
                </div>
                <div className={s.message}>
                    Yooo
                </div>
            </div>
        </div>
    )
}

export default Dialogs;