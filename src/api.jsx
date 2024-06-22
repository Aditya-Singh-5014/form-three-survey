// src/api.js

const BASE_URL =
  "https://my-json-server.typicode.com/Aditya-Singh-5014/fake-data";

export const fetchAdditionalQuestions = async (topic) => {
  try {
    const response = await fetch(`${BASE_URL}/${topic}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching additional questions:", error);
    return [];
  }
};
