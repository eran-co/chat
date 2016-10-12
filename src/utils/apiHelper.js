// import 'whatwg-fetch';
// TODO fix constants, test, try setting correct header type for url-encoded form
const ajax = ({url, method, headers, json, body}) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const myInit = {
    method: method || 'GET',
    headers: myHeaders,
    cache: 'default',
    body,
  };

  const myRequest = new Request(url, myInit);

  return fetch(myRequest, myInit)
    .then(response => Promise.resolve(json ? response.json() : response))
    .catch(response => Promise.reject(response));
};


export const post = ({url, headers, data, json}) => {
  return ajax({
    method: 'POST',
    url: url,
    headers: headers,
    json: json,
    body: JSON.stringify(data),
  });
};
