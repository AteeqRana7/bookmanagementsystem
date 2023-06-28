import React from 'react';
import { addBook } from '../../service/api';
import './addBook.css';
import 'animate.css';

const AddBook = () => {
  let title = '';
  let author = '';
  let bookPages = 0;
  let publishDate = '';

  const updateTitle = (e) => {
    title = e.target.value;
  };
  const updateAuthor = (e) => {
    author = e.target.value;
  };
  const updateBookPages = (e) => {
    bookPages = e.target.value;
  };
  const updatePublishDate = (e) => {
    publishDate = e.target.value;
  };

  const addNewBook = async () => {
    const response = await addBook(title, author, bookPages, publishDate);
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
          <h1>Add a new book.</h1>
          <div className='input-container'>
            <label>Title: </label>
            <input type='text' name='title' id='title' placeholder='Title' onChange={(e) => updateTitle(e)} required />
          </div>
          <div className='input-container'>
            <label>Author: </label>
            <input type='text' name='author' id='author' placeholder='Author' onChange={(e) => updateAuthor(e)} required />
          </div>
          <div className='input-container'>
            <label># of Pages: </label>
            <input type='number' name='no_of_pages' id='no_of_pages' placeholder='Total Pages' onChange={(e) => updateBookPages(e)} required />
          </div>
          <div className='input-container'>
            <label>Date Published: </label>
            <input type='date' name='publish_date' id='publish_date' onChange={(e) => updatePublishDate(e)} required />
          </div>
          <button className='addBook-btn' onClick={addNewBook}>
            Add Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
