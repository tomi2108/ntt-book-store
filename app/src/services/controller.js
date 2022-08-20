export const host =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

export let token = null;
export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};