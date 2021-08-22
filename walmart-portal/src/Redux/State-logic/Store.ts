import { combineReducers} from "redux";
import { myReducer } from "../Reducer-logic/Reducer";



//THIS IS A COMBINATION OF ALL REDUCERS IN YOUR SYSTEM
const allOfMyReducers = combineReducers({
    myStateReducer: myReducer,
})


export default allOfMyReducers;

export type State = ReturnType<typeof allOfMyReducers>;