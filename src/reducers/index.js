import { LOGIN, ADD_MESSAGE, LIKE_MESSAGE, UNLIKE_MESSAGE } from '../actions';


export const theReducer = (state = [], action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.token
            }
        case ADD_MESSAGE:
            fetch("https://kwitter-api.herokuapp.com/messages",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + state.token,
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        text: action.text
                    }),
                })
                .then(data => {
                    console.log("This message was posted: ", data);
                })

            return{
                ...state
            };
            case LIKE_MESSAGE:
            fetch("https://kwitter-api.herokuapp.com/likes",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + state.token,
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        userId: action.userId,
                        messageId: action.messageId, 
                    }),
                })
                .then(data => {
                    console.log("This message was liked: ", data);
                })

                return{
                    ...state
                };
            case UNLIKE_MESSAGE:
            let messagePath = "https://kwitter-api.herokuapp.com/likes/" + action.messageId;
            fetch(messagePath,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + state.token,
                        'Content-Type': 'application/json',
                    },
                    mode: "cors",
                })
                .then(data => {
                    console.log("This message was unliked: ", data);
                })
                return{
                    ...state
                };
        default:
            return state;
    }
};

