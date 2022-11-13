import { ActionType, UserInfoType } from '../types/AuthTypes';

const ACTION_CONST = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
} as const;

const authReducer = (state: UserInfoType, action: ActionType) => {
  switch (action.type) {
    case ACTION_CONST.SET_EMAIL:
      return { ...state, email: action.data };
    case ACTION_CONST.SET_PASSWORD:
      return { ...state, password: action.data };
    default:
      throw new Error('Unknown Action');
  }
};

export { authReducer };
