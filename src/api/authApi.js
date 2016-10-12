import {post} from '../utils/apiHelper';
import {baseApiUrl} from '../utils/config';

export function login(userName, password) {
  return post({
    url: `${baseApiUrl}/login`,
    data: {
      userName: userName,
      password: password,
    },
    json: true,
  });
}
