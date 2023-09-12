# Book Management System

This is a simple book management system built with React.js and Node.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The system consists of a frontend developed with React.js for the user interface and a backend implemented with Node.js for handling data storage and retrieval.

# Features

<ul>
  <li>View a list of books with their details</li>
  <li>Add a new book to the collection</li>
  <li>Update existing book details</li>
   <li>Delete a book from the collection</li>
</ul>

# Prerequisites

Before running this application, make sure you have the following software installed:

<ol>
  <li>Node.js: Download Node.js</li>
  <li>npm (Node Package Manager): This comes bundled with Node.js installation</li>
</ol>

# Getting Started

Follow these steps to get the book management system up and running on your local machine.

Clone the repository:

<ol>
  <li>git clone https://github.com/AteeqRana7/book-management-system/tree/master</li>
</ol>

Navigate to the project directory:

<ol>
  <li>cd book-management-system</li>
</ol>

Install the dependencies for both the frontend and backend:

Install frontend dependencies

<ol>
  <li>cd client</li>
  <li>npm install</li>
</ol>

Install backend dependencies

<ol>
  <li>cd ../server</li>
    <li>npm install</li>
</ol>

Start the development server for the frontend and backend:

<ol>
  Start frontend development server
  <li>cd client</li>
   <li>npm start</li>
</ol>

<ol>
  Start backend server
  <li>cd ../server</li>
  <li>npm start</li>
</ol>
Access the application
Open your browser and visit http://localhost:3000 to access the book management system.

# Folder Structure

The project is structured as follows:

<ul>
  <li>book-management-system/client/         # Frontend code</li>
  <li>book-management-system/server/         # Backend code</li>
  <li>book-management-system/README.md       # Project documentation</li>
</ul>

The client directory contains all the code related to the frontend React.js application, while the server directory contains the backend Node.js application.

# Technologies Used

The book management system is built using the following technologies:

Frontend:

<ul>
  <li>React.js: JavaScript library for building user interfaces</li>
  <li>React Router: Declarative routing for React applications</li>
  <li>Axios: Promise-based HTTP client for making API requests</li>
</ul>

Backend:

<ul>
  <li>Node.js: JavaScript runtime for server-side development</li>
  <li>Express: Web application framework for Node.js</li>
</ul>

# API Endpoints

The backend provides the following API endpoints:

<ul>
  <li>GET /books: Get a list of all books</li>
  <li>GET /editBook/:id : Get a specific book by ID to edit it</li>
   <li>POST /addBook: Add a new book</li>
  <li>PUT /editBook/:id : Update a book by ID</li>
  <li>DELETE /books/:id : Delete a book by ID</li>
</ul>

# Contributing

Contributions to the book management system are always welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

# License

This project is licensed under the MIT License.

# Acknowledgments

The book management system is inspired by various CRUD examples available in the React.js and Node.js communities.
Special thanks to the open-source contributors whose libraries and frameworks are used in this project.

# Contact

For any inquiries or questions, feel free to contact the project maintainer:

Name: Ateeq Rana
Email: ateeq.rana98@gmail.com
GitHub: @AteeqRana7
