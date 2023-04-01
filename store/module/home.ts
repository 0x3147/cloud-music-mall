import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getSearchSuggest, ISearchSuggest } from '@/service/home'

export interface IHomeInitialState {
  counter: number
  navbar: ISearchSuggest
}

const initialState = {}

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    counter: 10,
    navbar: {}
  } as IHomeInitialState,
  reducers: {
    increment: (state, { type, payload }) => {
      state.counter += payload
    }
  },
  extraReducers: (builder) => {
    // 保证服务器和客户端数据的一致性
    builder
      .addCase(HYDRATE, (state, action: any) => {
        // state => initialState
        // action.payload => rootState
        return {
          ...state,
          ...action.payload.home
        }
      })
      .addCase(fetchSearchSuggest.fulfilled, (state, { payload }) => {
        state.navbar = payload
      })
  }
})

export const fetchSearchSuggest = createAsyncThunk(
  'fetchSearchSuggest',
  async () => {
    const res = await getSearchSuggest()
    return res.data
  }
)

export const { increment } = homeSlice.actions
export default homeSlice.reducer
