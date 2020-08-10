module.exports.profile = function(req, res){
    return res.render('profile', {
        title: 'codeial | profile'
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

module.exports.create = function(req, res){

}

module.exports.createSession = function(req, res){

}