import { createStore, applyMiddleware, compose, combineReducers, Store } from 'redux';
import { todosReducer } from './reducers/todos';
import { postsReducer } from './reducers/posts';
import thunk from 'redux-thunk';
import { Todo } from './reducers';
import { Post } from './reducers/';

// import { reducers } from './reducers';

export interface StoreState {
  todos: Todo[];
  posts: Post[],
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  posts: postsReducer,
});


export default function configureStore(): Store<StoreState> {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
