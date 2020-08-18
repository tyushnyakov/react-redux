import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.interlocutor + " " + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const DialogsMessage = (props) => {
    return(
        <div className={c.message}>{props.message}</div>   
    );    
}

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let interlocutors = state.interlocutors.map(
        i => <DialogsItem name={i.name} key={i.id} id={i.id} />
    );

    let messages = state.messages.map(
        m => <DialogsMessage message={m.message} key={m.id} id={m.id} />
    );
    
    const onChangeMessageBody = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);
        //props.dispatch(updateNewMessageTextActionCreator(body))
    };
    const onClickSendMessage = () => {
        props.sendMessage();
        //props.dispatch(sendMessageActionCreator())
    };

    return (
        <div className={c.dialogsWrapper}>
            <div className={c.interlocutors}>
                {interlocutors}
            </div>
            <div className={c.messages}>
                <div>{messages}</div>
                <div>
                    <textarea onChange={onChangeMessageBody}
                        value={state.newMessageText} 
                        placeholder="Enter message">
                    </textarea>
                </div>
                <div><button onClick={onClickSendMessage}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;