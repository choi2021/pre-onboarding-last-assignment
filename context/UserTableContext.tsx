import { createContext, useReducer, Dispatch } from 'react';
import { UserTableType } from '../models/InfoTypes';

type SearchDistpatch = Dispatch<Action>;

const ACTION_CONST = {
  SET_DATA: 'SET_DATA',
  ADD_DATA: 'ADD_DATA',
  EDIT_NAME: 'EDIT_NAME',
  DELETE: 'DELETE',
} as const;

type Action =
  | { type: 'SET_DATA'; data: UserTableType[] }
  | { type: 'ADD_DATA'; add: UserTableType }
  | { type: 'EDIT_NAME'; edit: UserTableType }
  | {
      type: 'DELETE';
      id: number;
    };

export const UserTableStateContext = createContext<UserTableType[] | null>([]);
export const UserTableDispatchContext = createContext<SearchDistpatch | null>(
  null
);

const reducer = (state: UserTableType[], action: Action): UserTableType[] => {
  switch (action.type) {
    case ACTION_CONST.SET_DATA:
      return [...action.data];
    case ACTION_CONST.ADD_DATA:
      return [action.add, ...state];
    case ACTION_CONST.EDIT_NAME:
      return [...state].map((item) => {
        if (item.id === action.edit.id) {
          return action.edit;
        }
        return item;
      });
    case ACTION_CONST.DELETE:
      return [...state].filter((item) => item.id !== action.id);
    default:
      throw new Error('Unknown Action');
  }
};

export const UserTableProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <UserTableStateContext.Provider value={state}>
      <UserTableDispatchContext.Provider value={dispatch}>
        {children}
      </UserTableDispatchContext.Provider>
    </UserTableStateContext.Provider>
  );
};
