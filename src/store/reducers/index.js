import { combineReducers } from 'redux'
import formReducer from './form.reducer'
import statusReducer from './status.reducer'
import languageReducer from './language.reducer'

export default combineReducers({
    // Add reducers here
    form: formReducer,
    status: statusReducer,
    language: languageReducer,
})
