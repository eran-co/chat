export function getItem(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    return '';
  }
}

export function setItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    if(console && console.warn) console.warn('local storage - failed to set item: ' + error);
  }
}

export function removeItem(key) {
  try {
    return window.localStorage.removeItem(key);
  } catch (error) {
    if(console && console.warn) console.warn('local storage - failed to remove item: ' + error);

  }
}

