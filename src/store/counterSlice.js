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
        }
    }
})

export const { add, remove } = counterSlice.actions
export default counterSlice.reducer