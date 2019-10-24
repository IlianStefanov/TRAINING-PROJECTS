import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { postsReducer } from './posts';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface Comment {
  username: string,
  text: string,
}

export interface Post {
  id: number,
  username: string,
  thumbnailUrl: string;
  imageUrl: string,
  likes: number,
  liked: boolean,
  timestamp: string,
  comments: Comment[],
}

