import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://64.media.tumblr.com/c501eccd8fbdba33f48491abfbc3830d/tumblr_inline_pnszvaT4l61sirj9i_250.gifv'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/200/300'
}

const initialState = mode2

//the code below this little part is the reducer that is being exported to the store!
export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleDark: (state) => {
            return mode1
        }, 
        toggleLight: (state) => {
            return mode2
        }  
    }
})

export const { toggleDark, toggleLight } = modeSlice.actions

export default modeSlice.reducer