export const increment = nr => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = num => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
