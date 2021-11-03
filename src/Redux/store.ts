import { configureStore } from '@reduxjs/toolkit'
import PersonReducer from './PersonReducer'


export const store = configureStore({
  reducer: {
    person: PersonReducer
  },
})

export type RootState = ReturnType<typeof store.getState>