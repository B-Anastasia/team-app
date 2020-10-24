import {AppRootStateType} from "../store";


interface IRootState extends AppRootStateType {}

export const selectStateApp = (state: IRootState) => state.app
