import { createSlice } from "@reduxjs/toolkit";

const initdata = {
    items: [],
    total:0,
    amount:0,

}

const productSlice = createSlice({
    name: 'product',
    initialState: initdata,
    reducers: {
        addItem: (state, action) => {
            const newItem=action.payload
            const existItem = state.items.find(item => item.id === newItem.id)
            
            if (existItem) {
                existItem.amount += parseInt(newItem.amount)
            } else {
                state.items.push(newItem);
            }
            
            state.total+=newItem.price*newItem.amount
            state.amount+=parseInt(newItem.amount)
            localStorage.setItem('products', JSON.stringify(state.items))
        },
        clearCart: (state) => initdata
    }});


export default productSlice.reducer;
export const { addItem, clearCart } = productSlice.actions;