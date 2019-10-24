import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo, getPosts } from '../../store/actions';
import { StoreState } from '../../store/configureStore';
import { Todo, Post } from '../../store/reducers';
import PostContainer from '../Post/PostContainer';
import './App.scss'

export const App: React.FC = () => {
  // create some local state with useState that will tell us if our fetch result is still loading
  const [fetchingTodos, setFetchingTodos] = useState(false);
  const [fetchingPosts, setFetchingPosts] = useState(false);
  // redux hook that grabs a piece of the store (like mapStateToProps)
  const todos = useSelector((state: StoreState) => state.todos);
  const posts = useSelector((state: StoreState) => state.posts);
  // redux hook to get dispatch function. this is the alternative to using connect() with no second argument
  // which gives dispatch passed into this component automatically as a prop.
  const dispatch = useDispatch();
  // redux hook that is called whenever todos.length is changed
  useEffect(() => {
    if (todos.length) {
      setFetchingTodos(false);
    }
    if(posts.length) {
      setFetchingPosts(false);
    }
  }, [[todos.length],[posts.length]]);
  // create an array of buttons that dispatch the deleteTodo action onClick
  const curTodos = todos.map((todo: Todo) => (
    <button
      key={todo.id}
      style={{ border: '1px solid black' }}
      onClick={() => dispatch(deleteTodo(todo.id))}>
      {todo.title}
    </button>
  ));
  const renderPosts = posts.map((post: Post, index) => {
    console.log(post);
    return (
        <PostContainer 
          key={index}
          post={post}
          index={index}
        />
        )
    });
  // the first button below dispatches the fetchTodos action and makes the LOADING text display while it's fetching.
  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            dispatch(fetchTodos());
          }, 3000);
          
          setFetchingTodos(true);
        }}>
        fetch data !
      </button>

      <button
        onClick={() => {
          setTimeout(() => {
            dispatch(getPosts());
          }, 3000);
          
          setFetchingPosts(true);
        }}>
        fetch posts !
      </button>
      {fetchingTodos ? 'LOADING' : null}
      {curTodos}
      <div>
        {fetchingPosts ? 'LOADING' : null}
        {renderPosts}
      </div>
    </div>
  );
};
