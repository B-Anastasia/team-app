import {ActionTypes} from "../store";

const initialState = {
    isLoading: false,
    error: null as null | string,
    info: '',
}

type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.isError
            }
        case "SET_IS_INFO":
            return {
                ...state,
                info: action.isInfo
            }

        default:
            return {...state}
    }
}


export const setError = (isError: string | null) => ({type: 'SET_ERROR', isError} as const)
export const setIsLoading = (isLoading: boolean) => ({type: 'SET_IS_LOADING', isLoading} as const)
export const setInfo = (isInfo: string) => ({type: 'SET_IS_INFO', isInfo} as const)

