import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './module/home'
import { createWrapper } from 'next-redux-wrapper'

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper

// dispatch的类型
export type IAppDispatch = typeof store.dispatch
// rootState的类型
export type IAppRootState = ReturnType<typeof store.getState>
