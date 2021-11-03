import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";


const PersonReducer = createSlice({
    name:"person",
    initialState: {
        name:"BOBA",
        isLogin: false,
        adminData: {
            login: "admin",
            password: "admin"
        }
    },
    reducers: {
        changeLoginStatus: (state,action)=>{
            console.log(action.payload);
            console.log(state.isLogin)
            state.isLogin = action.payload;
            console.log(state.isLogin);
        }
        
    }
})

export const {changeLoginStatus} = PersonReducer.actions;

export default PersonReducer.reducer