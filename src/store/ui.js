import {
  createSlice
} from "@reduxjs/toolkit"

const slice = createSlice({
  name: "ui",
  initialState: {
    requestInFlight: false
  },
  reducers: {
    setInFlight: (state, action) => {
      state.requestInFlight = action.payload
    }
  },

  extraReducers: {
    "counter/incrementAPI/pending": (state, action) => {
      state.requestInFlight = true
    },
    "counter/incrementAPI/fulfilled": (state, action) => {
      state.requestInFlight = false
    },
    "counter/incrementAPI/rejected": (state, action) => {
      state.requestInFlight = false
    }
  }
})

export default slice.reducer
