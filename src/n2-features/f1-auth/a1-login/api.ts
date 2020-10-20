import axios from 'axios'

const settings = {
    withCredentials: true
}

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    ...settings
})

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}


export const authAPI = {
    login(data: LoginParamsType){
        return instance.post<Response>('auth/login', data)
    },
    me(){
        return instance.post<Response>('auth/me')
    },
    setNewPassword(password: string, resetPasswordToken: string){
        return instance.post('auth/set-new-password')
}

}

export type ResponseNewPassword = {
    info: string
    error: string
}

export type Response = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean;
    verified: boolean
    rememberMe: boolean
    error: string
}


