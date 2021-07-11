import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer, userRegisterReducer} from './reducers/userReducers'
import {productListReducer} from './reducers/productReducers'

const reducer = combineReducers({
    productList : productListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo : userInfoFromStorage },
}

const middelware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
    )

export default store