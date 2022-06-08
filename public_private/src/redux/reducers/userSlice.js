import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const userSlicer = createSlice({
    name: 'weather',
    initialState: {
        email:'',
       password:'',
       
    },
    reducers: {
        setName: (state, action) => {
            state.email = action.payload.email
            state.password=action.payload.password
            action.payload.callback()
        },
        setUserData:(state,action)=>{
            state.name=action.payload
        }
       
        // setPassword: (state, action) => {
        //     state.password = action.payload
        //     action.payload.callback()
        // },

        // setCity: (state, action) => {
        //     state.city = action.payload
        // },
        // setCountry: (state, action) => {
        //     state.country = action.payload
        },
        // extraReducers(builder) {
        //     builder.addCase(fetchPosts.pending, (state, action) => {
        //         state.isLoading = true
        //     })
        //         .addCase(fetchPosts.fulfilled, (state, action) => {
        //             state.temp = action.payload
        //             state.city = action.payload
        //             state.country = action.payload
        //         })
        //         .addCase(fetchPosts.rejected,(state,action)=>{
        //             state.isLoading=false
        //         })

        // }
    })

// Action creators are generated for each case reducer function
// export const { setTemp, setCity, setCountry } = counterSlice.actions
export const {setName,setUserData}=userSlicer.actions

export default userSlicer.reducer