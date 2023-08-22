import { configureStore } from '@reduxjs/toolkit'; 
import modeSlicer from './features/modeSlice';

//This is making the Redux available so it can be used in the index
const store = configureStore({
    reducer: {
        mode: modeSlicer
    }
})

export default store