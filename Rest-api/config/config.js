const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/store-zone',
        origin: ['http://localhost:5555', 'http://localhost:4200','http://localhost:5173','http://localhost:4173','https://softuni-react-project-1.onrender.com','https://soft-uni-react-project-woad.vercel.app']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: ['https://phonezone.onrender.com','http://localhost:5173','http://localhost:4173','https://softuni-react-project-1.onrender.com','https://soft-uni-react-project-woad.vercel.app']
    }
};

module.exports = config[env];
