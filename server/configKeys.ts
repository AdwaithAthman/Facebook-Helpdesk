import dotenv from 'dotenv';
dotenv.config();

const configKeys = {
    PORT: process.env.PORT!,
    MONGO_URL: process.env.MONGO_URL!,
    CLIENT_URL: process.env.CLIENT_URL!,
};

export default configKeys;