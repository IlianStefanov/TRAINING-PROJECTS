import { GetPostsAction } from './posts';
import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  fetchTodos = "FETCH_POSTS",
  deleteTodo = "DELETE_TODO",
  getPosts = "GET_POSTS",
}

export type Action = FetchTodosAction | DeleteTodoAction | GetPostsAction;
// this along with the enum
//sets up an implicit type guard in the reducer
