import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionTypes } from './actionTypes';
import { Post } from '../reducers/index';
import dummyDataPosts from '../dummyData';

export interface GetPostsAction {
    type: ActionTypes.getPosts;
    payload: Post[];
}

const url = 'https://my-json-server.typicode.com/IlianStefanov/Insta-clone/posts';

export const getPosts = () => {
    return async (dispatch: Dispatch) => {
          await axios.get<Post[]>(url).then(response => {
            console.log(response);
            dispatch<GetPostsAction>({
                type: ActionTypes.getPosts,
                payload: response.data,
            });
          })
          .catch(error => {
            console.log(error);
          });  
    }
}