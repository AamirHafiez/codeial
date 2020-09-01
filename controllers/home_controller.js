const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = function(req, res){
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        if(err){
            console.log('Error in finding posts in database');
            return;
        }

        User.find({}, function(err, users){
            return res.render('home', {
                title: 'codeial | home',
                posts: posts,
                all_users: users
            });
        });
    });
}