// localStorage.js
export const getLocalState = (key:any) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null || serializedState === "null") {
      return undefined;
    }
    let result:any;
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
export const _getLocalState = (key:any) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null || serializedState === "null") {
      return undefined;
    }
    let result:any;
    try{
      result = JSON.parse(serializedState)
    }catch(e){
      result = serializedState;
    }
    return result;
  } catch (err) {
    return "ssr";
  }
};

export const setLocalState = (key:any, value:any) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch {
    // ignore write errors
  }
};
