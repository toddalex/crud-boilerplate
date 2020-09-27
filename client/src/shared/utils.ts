import { TodoState } from '../models/todo.model';

export const updateObject = (oldObject: TodoState, updatedProperties: {}) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
