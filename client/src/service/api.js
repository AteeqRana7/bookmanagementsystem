import axios from 'axios';

const URL = 'http://localhost:8082';

export const getBooks = async () => {
  try {
    return await axios.get(`${URL}/books`);
  } catch (error) {
    console.log('Error while calling get books API', error);
  }
};

export const getBook = async (id) => {
  try {
    return await axios.get(`${URL}/books/editBook/${id}`);
  } catch (error) {
    console.log('Error while calling get book API', error);
  }
};

export const editBook = async (bookDetails) => {
  try {
    return await axios.put(`${URL}/books/editBook/${bookDetails.id}`, bookDetails);
  } catch (error) {
    console.log('Error while calling edit book API', error);
  }
};

export const addBook = async (title, author, bookPages, publishDate) => {
  try {
    const bookDetails = {
      title: title,
      author: author,
      bookPages: bookPages,
      publishDate: publishDate,
    };

    return await axios.post(`${URL}/books/addBook`, bookDetails);
  } catch (error) {
    console.log('Error while calling add book API', error);
  }
};

export const deleteBook = async (id) => {
  try {
    return await axios.delete(`${URL}/books/${id}`);
  } catch (error) {
    console.log('Error while calling delete book API', error);
  }
};
