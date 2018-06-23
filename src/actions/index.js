export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LIST_MESSAGES = 'LIST_MESSAGES';
export const LOGIN = 'LOGIN';

export const addMessage = (text) => {
    return{
    type: ADD_MESSAGE,
    text,
    // id
    //payload
    }
};

export const listMessages = (text, id) => {
    return{
    type: LIST_MESSAGES,
    //payload
    
    }
};

export const login = (token) => {
    return {
    type: LOGIN,
    token: token,
    
    }
};
