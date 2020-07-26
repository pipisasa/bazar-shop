// localStorage.js
export const getLocalState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    let result;
    try{
      result = JSON.parse(serializedState)
    }catch(e){
      result = serializedState;
    }
    return result;
  } catch (err) {
    return undefined;
  }
};

export const setLocalState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch {
    // ignore write errors
  }
};
