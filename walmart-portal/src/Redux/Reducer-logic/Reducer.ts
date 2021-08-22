import { IAppState, initialState } from '../State-logic/StateStructure'
import { ActionType, IAction } from "./ActionStructure";



//A switch case calling different functinalities
export const myReducer = (model: IAppState = initialState, action: IAction): IAppState => {
  
  switch (action.type) {
    case ActionType.CREATE:
      return CreateAction(model, action);
    case ActionType.DELETE:
      return DeleteAction(model, action);
    case ActionType.UPDATE:
      return UpdateAction(model, action);
    case ActionType.ALL:
        return GetAllAction(model, action);
    case ActionType.LOGIN:
        return LoginAction(model, action);
    case ActionType.LOGOUT:
        return LogoutAction(model, action);
    default: 
      return model;
  }
}

/**
 * 
 * @param model 
 * @param action 
 * defining the logic of each action
 */
const CreateAction = (model: IAppState, action: IAction) => {
  return Object.assign({}, model, { currentStudents: action.payload });
}

const DeleteAction = (model: IAppState, action: IAction) => {
  return Object.assign({}, model, { currentStudents: action.payload });
}

const UpdateAction = (model: IAppState, action: IAction) => {
  return Object.assign({}, model, { currentAdmin: action.payload });
}

const GetAllAction = (model: IAppState, action: IAction) => {
  return Object.assign({}, model, { currentStudents: action.payload });
}

const LoginAction = (model: IAppState, action: IAction) => {
    return Object.assign({}, model, { currentAdmin: action.payload });
}

const LogoutAction = (model: IAppState, action: IAction) => {
  return Object.assign({}, null, { currentAdmin: action.payload });
}

export const url:string = `http://54.147.51.99:9028`;