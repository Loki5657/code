import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=fcc8de7015bbb202209bbf0261babf4c&q=Kolkata'
    const res = await fetch(url)
    const json = await res.json()
    // const city = json.name
    // const temp = json.main.temp
    // const country = json.sys.country
    console.log(json);

})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temp: '',
        city: '',
        country: '',
        isLoading:false

    },
    reducers: {
        // setTemp: (state, action) => {
        //     state.temp = action.payload
        // },
        // setCity: (state, action) => {
        //     state.city = action.payload
        // },
        // setCountry: (state, action) => {
        //     state.country = action.payload
        },
        extraReducers(builder) {
            builder.addCase(fetchPosts.pending, (state, action) => {
                state.isLoading = true
            })
                .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.temp = action.payload
                    state.city = action.payload
                    state.country = action.payload
                })
                .addCase(fetchPosts.rejected,(state,action)=>{
                    state.isLoading=false
                })

        }
    })

// Action creators are generated for each case reducer function
// export const { setTemp, setCity, setCountry } = counterSlice.actions

export default weatherSlice.reducer