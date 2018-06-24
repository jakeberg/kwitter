export const LOGIN = 'LOGIN';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LIKE_MESSAGE = 'LIKE_MESSAGE';
export const UNLIKE_MESSAGE = 'UNLIKE_MESSAGE';

export const login = (token) => {
    return {
    type: LOGIN,
    token: token,
    
    }
};

export const addMessage = (text) => {
    return{
    type: ADD_MESSAGE,
    text,
    }
};

export const likeMessage = (userId, messageId) => {
    return{
    type: LIKE_MESSAGE,
    userId,
    messageId
    }
};

export const unlikeMessage = (messageId) => {
    return{
    type: UNLIKE_MESSAGE,
    messageId
    }
};




