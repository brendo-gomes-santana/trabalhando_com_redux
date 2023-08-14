import { combineReducers } from "redux";
import userSlice from "./user/slice";


export default combineReducers({
    user: userSlice
    // Se eu tive mais reduce, eu coloco aqui.
})