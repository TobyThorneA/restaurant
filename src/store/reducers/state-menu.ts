import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface CounterState {
  value: number
  stateBilbord: string
  menu: string
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  stateBilbord: 'Ближайшие',
  menu: 'Главная'
}

export const stateMenu = createSlice({
  name: 'stateMenu',
  initialState,
  reducers: {
    stateClassBilbord : (state, action: PayloadAction<string>) => {
      state.stateBilbord = action.payload
    },
    stateMenuActive : (state, action: PayloadAction<string>) => {
      state.menu = action.payload
    }
  }
})

export const { stateClassBilbord, stateMenuActive} = stateMenu.actions

export const selectCount = (state: RootState) => state.stateMenuName

export default stateMenu.reducer
