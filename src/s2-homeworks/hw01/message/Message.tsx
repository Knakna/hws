import React from 'react'
import {MessageType} from '../HW1'
import s from './Message.module.css'


type MessagePropsType = {
    message: MessageType
}
// нужно создать правильный тип вместо any

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    alt={'avatar'}
                    src={props.message.user.avatar}
                />
                <div className={s.angle}></div>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <div id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}

                    </div>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
