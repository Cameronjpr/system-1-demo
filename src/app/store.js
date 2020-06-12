import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../features/message/messageSlice'
import toolbarReducer from '../features/toolbar/toolbarSlice'
import windowReducer from '../features/window/windowSlice';

export default configureStore({
  reducer: {
    message: messageReducer,
    toolbar: toolbarReducer,
    window: windowReducer
  },
});
