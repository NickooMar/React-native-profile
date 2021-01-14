import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcryptjs";
import User from '../models/User';

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy((username:string, password:string, done) => {
    User.findOne({username: username}, (err:any, user: any) => {
        if(err) throw err;
        if(!user) return done(null, false);
        bcrypt.compare(password, user.password, (err:any, result: boolean) => {
            if(err) throw err;
            if(result) {
                return done(null, user)
            } else {
                return done(null, false);
            }
        })
    })

    passport.serializeUser((user: any, cb) => {
        cb(null, user._id);
    });
    
    passport.deserializeUser((id:string, cb) => {
        User.findOne({_id: id}, (err: any, user: any) => {
            const userInformation: any = {
                username: user.username,
                isAdmin: user.isAdmin,
                id: user._id
            };
            cb(err, userInformation);
        });
    });
})
);

export default passport