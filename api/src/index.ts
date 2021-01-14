import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";

import userRoutes from './routes/users.routes';

const app = express();


//---------------------------------------------------------
mongoose
  .connect(`mongodb://localhost/react-native-login`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));
//---------------------------------------------------------


app.use(express.json());
app.use(
  cors({
    origin:"http://localhost:19006",
    credentials: true
}));
app.use(session({
    secret:'Secret1',
    resave:true,
    saveUninitialized: true
}))
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use(userRoutes)

//-----Listen------

app.listen(4000, () => {
  console.log('Server on port 4000')
})
