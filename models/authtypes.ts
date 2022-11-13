export type ActionType =
  | { type: 'SET_EMAIL'; data: string }
  | { type: 'SET_PASSWORD'; data: string };
