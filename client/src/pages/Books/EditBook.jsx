import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, editBook } from '../../service/api';
import 'animate.css';

const temp = {
  id: 0,
  title: '',
  author: '',
  no_of_pages: 0,
  published_at: '',
};

const EditBook = () => {
  const [book, setBook] = useState(temp);
  const { id } = useParams();

  useEffect(() => {
    loadBookDetails(id);
  }, [id]);

  const loadBookDetails = async (id) => {
    const response = await getBook(id);
    setBook(response.data);
  };
  console.log(book);
  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const updateNewBook = async () => {
    const response = await editBook(book);
    document.querySelector('.modal-text').textContent = response.data.message;
    document.querySelector('.modal').classList.toggle('hide-modal');
  };

  const closeModal = () => {
    document.querySelector('.modal').classList.toggle('hide-modal');
  };
  return (
    <section>
      <div className='form-container animate__animated animate__backInDown'>
        <div className='modal hide-modal animate__animated animate__tada'>
          <button className='close-btn' onClick={closeModal}>
            X
          </button>
          <p className='modal-text'></p>
          <a href='/books'>
            <button className='nav-back-btn'>Back to Collection</button>
          </a>
        </div>
        <div className='add-book-form'>
          <h1>Edit book details.</h1>
          <div className='input-container'>
            <label>Title: </label>
            <input type='text' name='title' id='title' placeholder='Title' onChange={(e) => onValueChange(e)} value={book.title} />
          </div>
          <div className='input-container'>
            <label>Author: </label>
            <input type='text' name='author' id='author' placeholder='Author' onChange={(e) => onValueChange(e)} value={book.author} />
          </div>
          <div className='input-container'>
            <label># of Pages: </label>
            <input
              type='number'
              min='1'
              name='no_of_pages'
              id='no_of_pages'
              placeholder='Total Pages'
              onChange={(e) => onValueChange(e)}
              value={book.no_of_pages}
            />
          </div>
          <div className='input-container'>
            <label>Date Published: </label>
            <input type='date' name='published_at' id='published_at' onChange={(e) => onValueChange(e)} value={book.published_at} />
          </div>
          <button className='addBook-btn' onClick={updateNewBook}>
            Edit Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditBook;
