import axiosConfig from "./axiosConfig";

export const login = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        url: "/auth/login",
        method: "post",
        data: payload,
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const register = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        url: "/auth/register",
        method: "post",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
