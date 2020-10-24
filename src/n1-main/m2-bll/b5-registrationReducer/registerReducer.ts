import {Dispatch} from "redux";
import {authAPI, RegisterParams} from "../../m3-dal/api";
import {ActionTypes} from "../store";
import {setError, setIsLoading} from "../b1-app/appReducer";


const initialState = {
    email: null as null | string,
    password: null as null | string,
    isLoading: false,
    isRegistered: false,
    error: null as null | string,
};

type InitialState = typeof initialState;


export const registerReducer = (state: InitialState = initialState, action: ActionTypes): InitialState => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                ...action.data
            }

        case "SET_IS_REGISTERED":
            return {
                ...state,
                isRegistered: action.isRegistered
            }

        default:
            return state;
    }
};

export type NewUserData = {
    email: null | string,
    password: null | string,
}


export const setNewUserData = (data: NewUserData) => ({type: 'CREATE_USER', data} as const)
export const setIsRegistered = (isRegistered: boolean) => ({type: 'SET_IS_REGISTERED', isRegistered} as const)


//thunks
export const registerUser = (params: RegisterParams) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setIsLoading(true));
    dispatch(setError(null));
    try {
        const res = await authAPI.register(params)
        dispatch(setNewUserData({email: res.data.addedUser.email, password: res.data.addedUser.password || null}))
        dispatch(setIsLoading(false));
        dispatch(setIsRegistered(true));
    } catch (error) {
        console.dir(error);
        dispatch(setError(error.response.data.error));
        dispatch(setIsLoading(false));
        dispatch(setIsRegistered(false));
    }
}



