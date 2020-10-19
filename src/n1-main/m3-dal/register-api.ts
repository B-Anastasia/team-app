import {instance} from "./base-api";

export type RegisterParams = {
    email: string;
    password: string;
}

type ResponseUserType = {
    addedUser?: any,
    error?: string,
    email?: string,
}

export const registerAPI = {
    register(params: RegisterParams) {
        return instance.post<ResponseUserType>("auth/register", params)
    }
}
