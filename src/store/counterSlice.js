import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add(state, action) {
            state.count += action.payload
            // console.log(state.count)
        },
        remove(state, action) {
            state.count -= action.payload
            // console.log(state.count)
        },
        clear(state, action) {
            state.count = 0
        }
    }
})

export const { add, remove, clear } = counterSlice.actions
export default counterSlice.reducer