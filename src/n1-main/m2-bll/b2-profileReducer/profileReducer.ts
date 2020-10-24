import {ActionTypes} from "../store";

export type setIsDataProfilePayload = {
    name: string
    email: string
    created: string
    updated: string
    avatar?: string
    _id: string
    rememberMe: boolean
}

const initialState = {
    _id: '',
    email: '',
    isAdmin: false,
    rememberMe: null as null | boolean,
    created: '',
    updated: '',
    name: '',
};
type InitialStateType = typeof initialState



export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){
        case "SET_IS_DATA_PROFILE":
            return {...state, ...action.data}
    }
    return state;
};


export const setIsDataProfileAC = (data: setIsDataProfilePayload) => ({type:"SET_IS_DATA_PROFILE", data} as const)

