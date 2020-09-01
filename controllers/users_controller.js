const User = require('../models/user');

module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('profile', {
            title: 'codeial | profile',
            profile_user: user
        });
    }); 
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in.ejs', {
        title: 'codeial | sign in'
    });
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up.ejs', {
        title: 'codeial | sign up'
    });
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}

//create a user in User Schema (Sign Up)
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in finding user in User Database');
            return;
        }
        if(user){
            return res.redirect('back');
        }else{
            User.create(req.body, function(err, user){
                if(err){
                    console.log('Error in creating user');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }
    });
}

module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            return res.redirect('back');
        });
    }else{
        res.status(401, sent('unauthorized'));
    }
}