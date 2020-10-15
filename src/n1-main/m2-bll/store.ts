import {combineReducers, createStore, compose} from 'redux';
import {loginReducer} from "./loginReducer";
import {registerReducer} from "./registerReducer";
import {passwRestoreReducer} from "./passwRestoreReducer";
import {passwUpdateReducer} from "./passwUpdateReducer";
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    passwRestore: passwRestoreReducer,
    passwUpdate: passwUpdateReducer,
    profile: profileReducer
});

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, compose(
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
