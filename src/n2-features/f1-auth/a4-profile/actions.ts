export enum ACTIONS_TYPE {
    SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN',
    SET_IS_DATA_PROFILE = 'SET_IS_DATA_PROFILE'

}
export type setIsDataProfilePayload = {
    name: string
    email: string
    created: string
    updated: string
    avatar?: string
}

export type setIsLoggedInPayload = {
    value: boolean
}

const makeActions = <T extends ACTIONS_TYPE, P>(type:T) => (payload: P) => ({type, payload})

export const setIsDataProfileAC = makeActions<ACTIONS_TYPE.SET_IS_DATA_PROFILE, setIsDataProfilePayload>(ACTIONS_TYPE.SET_IS_DATA_PROFILE)
export const setIsLoggedInAC = makeActions<ACTIONS_TYPE.SET_IS_LOGGED_IN, setIsLoggedInPayload>(ACTIONS_TYPE.SET_IS_LOGGED_IN)

interface IStringMap<T> {
    [key:string]: T
}

type IAnyFunction = (...args: any[]) => any

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>

const actions = {
    setIsLoggedInAC,
    setIsDataProfileAC
}

export type ActionsType = IActionUnion<typeof actions>
