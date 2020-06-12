import { createSlice } from '@reduxjs/toolkit'
import { addWindow } from '../window/windowSlice'

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState: [
    { id: 0, name: 'File', open: false, children: [{name: 'New Conversation', type: 'ADD_WINDOW'}, {name: 'Open...', type: 'OPEN'}]},
    { id: 1, name: 'Edit', open: false, children: [{name: 'Cut', type: 'ADD_WINDOW'},{name: 'Copy', type: 'ADD_WINDOW'}, {name: 'Paste', type: 'ADD_WINDOW'}] },
    { id: 2, name: 'View', open: false, children: [{name: 'Make text bigger', type: 'ADD_WINDOW'},{name: 'Make text smaller', type: 'ADD_WINDOW'}] },
  ],
  reducers: {
    toggleItem(state, action) {
      state.map(item => 
        item.id === action.payload ? 
        item.open = !item.open : 
        item.open = false   
      )
    }
  }
})

export const { toggleItem } = toolbarSlice.actions
export const selectItems = state => state.toolbar;

export default toolbarSlice.reducer