import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({dialogs, messages}) => {

    // let dialogs = [
    //     {id: 1, name: 'Oleshych'}, 
    //     {id: 2, name: 'Alex'}, 
    //     {id:3, name: 'Helga'}, 
    //     {id:4, name: 'Perdak'},
    //     {id:5, name: 'Cherdak'}
    // ];

    // let messages = [
    //     {id: 1, message: 'Hi'}, 
    //     {id: 2, message: 'Pruvet'}, 
    //     {id:3, message: 'Yooo'}, 
    // ];
    let dialogsElements = dialogs
        .map((number) => <DialogsItem key = {number.id} name = {number.name} id = {number.id}/>
    );
    let messagesElements = messages
        .map (number => <Message key = {number.id} message = {number.message} />)
    return (
        <div className = {s.dialogs}>
            <div className = {s['dialogs-items']}> 
                { dialogsElements }  
            </div>
            <div className = {s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;