const User = require('../models/user');
const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        User.findOne({email: email}, function(err, user){
            if(err){
                console.log('Error in finding user --> PASSPORT');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        });
    }
));

// serializing user to dedide which key is to be kept in cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// desearilizing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> PASSPORT');
            return done(err);
        }
        return done(null, user);
    });
});

module.exports = passport;