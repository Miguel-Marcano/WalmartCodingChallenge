//this enum defines what types of actions can be taken b the reducer
export enum ActionType {
    CREATE = "createAction",
    DELETE = "deleteAction",
    UPDATE = "updateAction",
    ALL = "getAllAction",
    LOGIN = "loginAction",
    LOGOUT = "logoutAction"
}

//this interface defines the structure of the actions given to the reducer
export interface IAction{
    type: ActionType,
    payload: any
}