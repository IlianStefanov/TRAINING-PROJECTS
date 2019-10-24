import { Action, ActionTypes } from '../actions';
import { Post } from './index';
export const postsReducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.getPosts:
      return action.payload;
    default:
      return state;
  }
};
