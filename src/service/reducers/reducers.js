import {Add_To_Cart, Remove_To_Cart} from '../constants';
const initialState = {
    cartData : []
}
function cartItems(state = [], action){
    switch(action.type){
        case Add_To_Cart : 
            return[
                ...state,
                {cartData : action.data}
            ]
        case Remove_To_Cart : 
        console.log("1--",state);
        state.pop();
        console.log("1--",state);
            return[
                ...state
            ]     
        default:
            return state   
        
    }
}

export default cartItems;