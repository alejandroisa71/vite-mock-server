import { _id, _name } from './assets.js';

export const _user = (index) => {
  return {
    id: _id[index],
    name: _name[index],
  };
};
