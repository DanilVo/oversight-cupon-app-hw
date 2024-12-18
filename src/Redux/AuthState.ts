import { legacy_createStore as createStore } from "redux";
import UserModel from "../Models/UserModel";

/*
  Functionality that is presented in this reducer: 
  - Setting coupon state 
*/

class AuthState {
  public user: UserModel = null;
}

export enum ActionTypes {
  Login = "Login",
  Logout = "Logout",
  NewUser = "NewUser",
  GetUser = "GetUser",
}

export interface AuthAction {
  type: ActionTypes;
  payload?: any;
}

function authReducer(
  currentState = new AuthState(),
  action: AuthAction
): AuthState {
  const newState = { ...currentState };

  switch (action.type) {
    case ActionTypes.Login: {
      delete action.payload[0].password;
      newState.user = action.payload[0];
      const token = btoa(JSON.stringify(newState.user));
      localStorage.setItem("token", token);
      break;
    }

    case ActionTypes.GetUser: {
      delete action.payload.password;
      newState.user = action.payload;      
      break;
    }

    case ActionTypes.Logout:
      newState.user = null;
      localStorage.removeItem("token");
      break;

    case ActionTypes.NewUser:
      break;
  }

  return newState;
}

export const authStore = createStore(authReducer);
