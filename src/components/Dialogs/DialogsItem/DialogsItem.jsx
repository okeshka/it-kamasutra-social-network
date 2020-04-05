import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
    const {name, id} = props
    return (
        <div className = {s.dialog}>
            <NavLink to = {`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem;