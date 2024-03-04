
import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then((resolve) => resolve.json())
  .then((data) => fillUsersSelect(data.users))

// fillUsersSelect(users);
usersSelect.addEventListener('change', () => {
  clearPageData();
  
  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((resolve) => resolve.json())
    .then((data) => {
      fillPosts(data.posts)
      const [featuredPost] = data.posts
      return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`)
    })
    .then((res) => res.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch ((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message)
    })
});