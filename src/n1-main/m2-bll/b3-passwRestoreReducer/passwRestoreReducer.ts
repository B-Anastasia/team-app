import {Dispatch} from "react";
import {authAPI, ForgotPasswordType} from "../../m3-dal/api";
import {setIsErrorAC, setIsLoadingAC, setIsLoggedInAC} from "../b3-loginReducer/actions";
import {ActionsType, setIsEmailAC} from "./actions";

const initialState = {
    info: '',
};

type InitialStateType = typeof initialState

export const passwRestoreReducer = (state: InitialStateType = initialState, action: ActionsType ): InitialStateType => {
    return state;
};

export const forgotPasswordTc = (data:ForgotPasswordType) => async (dispatch:Dispatch<ActionsType>) => {
    dispatch(setIsLoadingAC(true))
    const requestData = {
        ...data,
        from: 'test-front-admin <slipok1999@mail.ru>',
        message: `<div>password recovery link: <a href='http://localhost:3000/#/update/$token$'>TAP TAP TAP</a></div>`
    }
    try {
        const response = await authAPI.forgotPassword(requestData)
        console.log(response.data.info)
        dispatch(setIsLoadingAC(false))

    }catch (error){
        console.log(error.response.data.error)
        dispatch(setIsErrorAC(error.response.data.error))
        dispatch(setIsLoadingAC(false))
    }
}


