export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
};

export const setLocalStorage = <T>(key: string, value: T) => {
  debugger;
  localStorage.setItem(key, JSON.stringify(value));
};
