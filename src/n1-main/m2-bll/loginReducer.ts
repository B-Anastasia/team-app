import {authAPI, LoginParamsType} from "../../n2-features/f1-auth/a1-login/api";
import {Dispatch} from "react";
import {
    ACTIONS_TYPE,
    ActionsType,
    setIsDataProfileAC,
    setIsLoggedInAC
} from "../../n2-features/f1-auth/a4-profile/actions";

const initialState = {
    isLoggedIn: false,
    email:null as null | string,
    name: null as null | string,
    avatar: null as null | string,
    updated: null as null | string,
    created: null as null | string,
};
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_IS_DATA_PROFILE:
            return {...state, ...action.payload}
        case ACTIONS_TYPE.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.payload.value}
    }
    return state;
};


export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(data).then(res => {
        if (res.status === 200) {
            const {email, name, created, updated, avatar} = res.data
            dispatch(setIsLoggedInAC({value:true}))
            dispatch(setIsDataProfileAC({email:email, created:created, name:name, updated:updated, avatar:avatar}))
        }
    })
        .catch((error) => {
            console.log(error)
        })
}
