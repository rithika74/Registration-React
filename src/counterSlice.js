import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
   data:''
}
export const counterSlice = createSlice({
  name: 'regdata',
  initialState,
  reducers: {
    
    adddata: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { adddata } = counterSlice.actions

export default counterSlice.reducer
