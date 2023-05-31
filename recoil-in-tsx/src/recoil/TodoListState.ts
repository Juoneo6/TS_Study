import { atom } from 'recoil';
import { TodoItemType } from '../models/TodoItem';

export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
})