export const getToken = () => {
  return localStorage.getItem("adminToken");
};

export const setToken = (token: string) => {
  localStorage.setItem("adminToken", token);
};

export const removeToken = () => {
  localStorage.removeItem("adminToken");
};
