import { API_URL } from "../utils/constants";

export const getAllUsers = async (page = 1, name, last) => {
  const response = await fetch(
    `${API_URL}/usuarios?npp=5&page=${page}&name=${name}&last=${last}`
  );
  return response.json();
};

export const saveUser = async (values) => {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  return response.json();
};

export const updateUser = async (values, id) => {
  const response = await fetch(`${API_URL}/usuarios/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  return response.json();
};
