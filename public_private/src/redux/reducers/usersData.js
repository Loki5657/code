import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const Users = createSlice({
    name: 'weather',
    initialState: {
       name:'',
    },
    reducers: {
       
        setUserData:(state,action)=>{
            state.name=action.payload
        }
        },
        
    })

// Action creators are generated for each case reducer function
// export const { setTemp, setCity, setCountry } = counterSlice.actions
export const {setUserData}=Users.actions

export default Users.reducer