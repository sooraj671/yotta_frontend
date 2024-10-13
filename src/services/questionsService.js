import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/questions';
const BASE_URL = 'https://virtuous-joy-production.up.railway.app/questions';

export const fetchQuestions = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const postQuestion = async ( questionData) => {
  try {
    const res = await axios.post(BASE_URL, questionData); // Pass questionData directly
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


// export const editQuestion = async (id, questionText, username) => {
//   const response = await fetch(`${BASE_URL}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       //'Authorization': `Bearer ${localStorage.getItem('token')}`, // If you're using tokens for authentication
//     },
//     body: JSON.stringify({ question: questionText, username }), // Make sure you are sending the correct format
//   });
//   console.log('Response Status:', response.status);
//   const responseText = await response.text(); 

//   if (!response.ok) {
//    // const errorData = await response.json();
//     throw new Error(responseText || 'Failed to edit question'); // Throw an error with a message from the response
//   }

//   return await JSON.parse(responseText);; // Return the updated question or relevant data
// };
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
