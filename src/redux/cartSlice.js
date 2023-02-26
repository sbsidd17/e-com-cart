import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cratSlice',
    initialState : {
        cart : []
    },
    reducers : {
        addToCart : (state, action)=>{
            const cartItem = state.cart.find(item=>item.id === action.payload.id)
            if(cartItem){
                cartItem.quantity += 1;
                return;
            }
            state.cart.push({
                id : action.payload.id,
                image : action.payload.image,
                title : action.payload.title,
                rating : action.payload.rating,
                price : action.payload.price,
                quantity : 1,
            })
        },
        removeFromCart : (state, action)=>{
            const cartItem = state.cart.find(item=>item.id === action.payload.id)
            if(cartItem){
                cartItem.quantity -= 1;
                if(cartItem.quantity === 0){
                    state.cart = state.cart.filter(item => item.id !== action.payload.id)
                }
            }
            
        }
    }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;