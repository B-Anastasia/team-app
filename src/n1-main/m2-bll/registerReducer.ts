enum ACTIONS_TYPE {
    CREATE_USER = 'Registration/CREATE_USER',
}

type InitialState = typeof initialState;

const initialState = {
    email: null as null | string,
    password: null as null | string,
};

export const registerReducer = (state: InitialState = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPE.CREATE_USER:
            return {
                state,
                ...action.payload
            }
        default:
            return state;
    }
};


//payloads

export type NewUserData = {
    email: null | string,
    password: null | string,
}

//func to create an action creators
const makeActions = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

//AC
export const setNewUserData = makeActions<ACTIONS_TYPE.CREATE_USER, NewUserData>(ACTIONS_TYPE.CREATE_USER)

//object of AC
const actions = {
    setNewUserData,
}
//A[keyof A] returns type object ({type, payload}) that returns the function  T extends ((...args: any) => infer R) ? R : any
//A should have { [key:string]: (...args: any[]) => any }}  this is [nameAC]:(payload)=>{type, payload}
type IActionUnion<A extends { [key: string]: (...args: any[]) => any }> = ReturnType<A[keyof A]>

//create AC Types of the object actions
//combine all types of the actions
export type ActionsType = IActionUnion<typeof actions>




