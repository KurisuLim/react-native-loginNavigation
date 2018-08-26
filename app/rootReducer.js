import { combineReducers } from 'redux';
import RegisterReducer from './containers/RegisterContainer/RegisterReducer'

const userDataDefaultState = {
    firstNameInput: ' ',
    lastNameInput: ' ',
    emailInput: ' ',
    passwordInput: ' ',
    user:{
        id: ' ',
        token: ' ',
    }
}

const rootReducer = combineReducers({
    registerData: RegisterReducer,
});

export default rootReducer;
