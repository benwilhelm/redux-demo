import {
  createSlice,
  createAsyncThunk

} from '@reduxjs/toolkit'
import api from "../services/api"

export const getCountAPI = createAsyncThunk(
  'counter/getCountAPI',
  async () => {
    try {
      const { data } = await api.get("/")
      return data
    } catch (e) {
      throw e
    }
  }
)

export const incrementAPI = createAsyncThunk(
  "counter/incrementAPI",
  async ({ undoValue }, { getState, rejectWithValue }) => {
    try {
      const { data } = await api.post('/increment')
      return data
    } catch (e) {
      return rejectWithValue({ undoValue })
    }
  }
)

const slice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },

  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementBy: (state, action) => {
      state.count += action.payload
    },
    decrementBy: (state, action) => {
      state.count -= action.payload
    }
  },

  extraReducers: {
    [getCountAPI.fulfilled]: (state, action) => {
      state.count = action.payload.count
    },
    [incrementAPI.fulfilled]: (state, action) => {
      console.log('fulfilled', action)
      state.count = action.payload.count
    },
    [incrementAPI.rejected]: (state, action) => {
      console.log("ACTION", action)
      const { undoValue } = action.payload
      state.count = undoValue
    }
  }
})

export const {
  increment,
  decrement,
  incrementBy,
  decrementBy
} = slice.actions
export default slice.reducer
