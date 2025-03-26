export type OperationType = '+' | '-' | '�' | '�' | '=' | '';

export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: OperationType;
  isResult: boolean;
}

export enum ActionType {
  ADD_DIGIT = 'ADD_DIGIT',
  CHOOSE_OPERATION = 'CHOOSE_OPERATION',
  CLEAR = 'CLEAR',
  DELETE_DIGIT = 'DELETE_DIGIT',
  EVALUATE = 'EVALUATE',
  TOGGLE_SIGN = 'TOGGLE_SIGN',
  PERCENTAGE = 'PERCENTAGE'
}

export type Action = 
  | { type: ActionType.ADD_DIGIT; payload: { digit: string } }
  | { type: ActionType.CHOOSE_OPERATION; payload: { operation: OperationType } }
  | { type: ActionType.CLEAR }
  | { type: ActionType.DELETE_DIGIT }
  | { type: ActionType.EVALUATE }
  | { type: ActionType.TOGGLE_SIGN }
  | { type: ActionType.PERCENTAGE };