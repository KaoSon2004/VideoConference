import axiosConfig from "./axiosConfig";

export const sendFriendInvitation = (targetMail, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        url: "friendInvitation/invite",
        method: "post",
        data: {
          targetMail,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type ": "application/json",
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const acceptFriendInvitation = (id, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        url: "friendInvitation/accept",
        method: "post",
        data: {
          id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const rejectFriendInvitation = (id, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        url: "friendInvitation/reject",
        method: "post",
        data: {
          id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type ": "application/json",
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
