import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {}

const INITIAL_STATE: State = {}

export default reducerWithInitialState(INITIAL_STATE)
