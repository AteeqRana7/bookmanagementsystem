const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 8082;

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

//built-in middleware to handle url encoded data
//data which user enters in a form
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json data
app.use(express.json());

//Routes
app.use('/books', require('./routes/api/books'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
