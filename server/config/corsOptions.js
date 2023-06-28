const whitelist = ['https://ateeqrana.live', 'http://127.0.0.1:5500', 'http://localhost:8082', 'http://localhost:3000'];

//After development, we remove the local URLs, and also the !origin in the if statement, because during development, we often get an undefined origin.
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
