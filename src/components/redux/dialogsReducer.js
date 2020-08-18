const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    interlocutors: [
        {name:"Bill", id:1},
        {name:"Mark", id:2},
        {name:"John", id:3},
        {name:"Donald", id:4},
        {name:"Tina", id:5}
    ],
    messages: [
        {message:"Hi!", id:1},
        {message:"HAY", id:2},
        {message:"I'm fine", id:3},
        {message:"Thanks", id:4}
    ],
    newMessageText:""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id:5 
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});

export default dialogsReducer;