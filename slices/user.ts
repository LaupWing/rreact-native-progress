import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
   name: "user",
   initialState: {
      value: 0,
   },
   reducers: {
      decrement: (state) => {
         state.value -= 1
      }
   },
})

export const { decrement } = userSlice.actions

export const fetchTasks = () => async () => {

}

export default userSlice.reducer