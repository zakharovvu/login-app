const API_URL = process.env.REACT_APP_API_URL
  + '/users';

console.log(API_URL);

export const getUsers = () => {
  return fetch(API_URL)
    .then(res => res.json());
};



export const createUser = (user) => {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(res => res.json());
};