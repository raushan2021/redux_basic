import {Add_To_Cart, Remove_To_Cart} from '../constants'

const addtoCart = (data) =>{
    console.log(data)
    return{
        data,
        type: Add_To_Cart
    }
}

const removetoCart = (data) =>{
    return{
        data,
        type: Remove_To_Cart
    }
}

export {addtoCart, removetoCart};