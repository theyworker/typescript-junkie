import * as React from 'react';

interface UserMessage {
    message : string, name : string,
 }
const Message = (props : UserMessage) : any => {
    return <p>{props.name} : {props.message}</p>
}
export default Message