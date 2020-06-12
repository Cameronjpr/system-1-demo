import { createSlice } from '@reduxjs/toolkit'

let windowId=0;

export const windowSlice = createSlice({
  name: 'window',
  initialState: [
    { id: windowId++, name: "Messages", subheader: "John Appleseed" }
  ],
  reducers: {
    addWindow(state, action) {
      console.log(state, action)
      if (action.payload) state.push({ id: windowId++, name: "Messages", subheader: "John Appleseed" })
    }
  }
})

export const { addWindow } = windowSlice.actions
export const selectWindows = state => state.window;

export default windowSlice.reducer