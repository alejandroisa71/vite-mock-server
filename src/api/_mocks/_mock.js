import { _user } from './_users.js';

export const _mock = (index) => {
  return {
    user: _user(index),
  };
};
