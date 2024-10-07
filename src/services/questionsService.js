import axios from 'axios';

const BASE_URL = 'http://localhost:5000/questions';

export const fetchQuestions = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const postQuestion = async (name, question) => {
  try {
    const res = await axios.post(BASE_URL, { name, question });
    return res.data;
  } catch (error) {
    console.error('Error posting question:', error);
    throw error;
  }
};

export const editQuestion = async (id, updatedQuestion, user) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, {
      question: updatedQuestion,
      user
    });
    return res.data;
  } catch (error) {
    console.error('Error editing question:', error);
    throw error;
  }
};

export const deleteQuestion = async (id, user) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`, { data: { user } });
  } catch (error) {
    console.error('Error deleting question:', error);
    throw error;
  }
};

export const postComment = async (id, name, text) => {
  try {
    const res = await axios.post(`${BASE_URL}/${id}/comments`, { name, text });
    return res.data;
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
};
