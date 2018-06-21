import { ADD_MESSAGE, LIST_MESSAGES, LOGIN } from '../actions';




export const theReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            // ...state will create a new instance of state and then after the ',' the second parameter will add to that. 
            return {
                ...state,
                messages: [
                    ...state.messages,{
                        id: (state.todos.length + 1),
                        text: action.text,
                        userId: 1,
                        updatedAt: action.updatedAt,
                        createdAt: action.createdAt,
                        
                    }
                ],
            };
            
        
            
        default:
            return state;
    }
};