export const getFromLocalStorage= <T>(key: string):T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
};

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
