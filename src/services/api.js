import axios from "axios";
// import { store } from "../redux/Store";
// import { refreshToken } from "../redux/features/auth/thunks";
// import { logout } from "../redux/features/auth/slice";

export const prod = "https://srhrms.com/api/";
export const test = "http://72.60.200.214/api/";

const api = axios.create({
  baseURL: test,
});

// api.interceptors.request.use((config) => {
//   const { auth } = store.getState();
//   if (auth.user?.access) {
//     config.headers.Authorization = `Bearer ${auth.user.access}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     const isRefreshRequest = originalRequest.url.includes("login/refresh/");
//     if (isRefreshRequest && error.response?.status === 401) {
//       store.dispatch(logout());
//       return Promise.reject(error);
//     }
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await store.dispatch(refreshToken());
//         return api(originalRequest);
//       } catch (refreshError) {
//         store.dispatch(logout());
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
