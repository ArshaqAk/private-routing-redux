import { createSlice } from "@reduxjs/toolkit";

const authSlice =createSlice({
    name:'auth',
    initialState: localStorage.getItem('isauthenticated') || false,
    reducers:{
     login(){
      localStorage.setItem('isauthenticated',true)
      return true
     },
     logout(){
      localStorage.removeItem('isauthenticated')
      return false
     }
    }
})

export const {login,logout}= authSlice.actions;
export default authSlice.reducer