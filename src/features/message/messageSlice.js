import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
         name: 'message',
         initialState: [],
         reducers: {
          postMessage: {
            reducer(state, action) {
              state.push({ text: action.payload })
            },
           },
         },
       })

export const { postMessage, addConversation } = messageSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.message.value)`
export const selectThread = state => state.message;

export default messageSlice.reducer;
