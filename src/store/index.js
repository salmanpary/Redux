import { configureStore,createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increment(state,action){
            state.counter=state.counter +1;
        },
        decrement(state,action){
            state.counter=state.counter -1;
        },
        addBy(state,action){
            state.counter=state.counter+action.payload
        }



    }

})
const actions=counterSlice.actions;
export {actions}
const store=configureStore({
    reducer:counterSlice.reducer
})
export default store;