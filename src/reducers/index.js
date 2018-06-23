import { ADD_MESSAGE, LOGIN } from '../actions';


export const theReducer = (state = [], action) => {
    switch (action.type) {
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
                .then(response => response.json())
                .then(data => {
                console.log("This message was posted: ",data);
            })
    

            return;
        case LOGIN: 
            return {
            ...state,
            token: action.token
            }    
        default:
            return state;
    }
};

