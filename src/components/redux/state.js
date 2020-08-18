import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {message:"Hi", countLike:12},
                {message:"How", countLike:10},
                {message:"are you", countLike:4}
            ],
            newPostText: "new post"
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;