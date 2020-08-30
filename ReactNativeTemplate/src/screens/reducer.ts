import { combineReducers } from 'redux'
import homeReducer, {
  State as HomeState,
} from '@src/screens/HomeScreen/reducers'

export interface ScreensState {
  Home: HomeState
}

export default combineReducers<ScreensState>({
  Home: homeReducer,
})
