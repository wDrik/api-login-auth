import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/api_auth_login', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default mongoose;
