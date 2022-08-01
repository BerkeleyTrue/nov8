export interface IToast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

export const ActionTypes = ['ADD', 'DELETE'] as const;

export type ActionTypes = typeof ActionTypes[number];

export type IAction =
  | {
      type: 'ADD';
      toast: IToast;
    }
  | {
      type: 'DELETE';
      id: string;
    }
  | void;
