import { createSlice } from "@reduxjs/toolkit";

const carteSlice = createSlice({
    name: "cart",
    initialState: [],
    reducer: {
        AddItem: (state, action) => {
            state.push(action.payload)
        }
    }

})
export const {AddItem} = carteSlice.actions;
export default carteSlice.reducer;