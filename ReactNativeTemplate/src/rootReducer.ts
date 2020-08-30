import { combineReducers } from 'redux'
import commonReducer, { CommonState } from '@src/common/reducer'
import screensReducer, { ScreensState } from '@src/screens/reducer'

export interface RootState {
  // common: CommonState
  screens: ScreensState
}

export default combineReducers<RootState>({
  // common: commonReducer,
  screens: screensReducer,
})
