import { SEND } from '../response';

export const fetchAll = (req, res, next) => {
  SEND(res, false, {
    message: 'am from controller, API is working'
  });
};
