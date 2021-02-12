var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Job = require('../models/job');

let Cities = require('./cities.json');

router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/');
		}else{
			console.log("found");
			Job.find(function(err,result){
				console.log("result");
				console.log(result);
				console.log("found");
                return res.render('data.ejs', {"name":data.name,"email":data.email,"type":data.type,"result":result});
				
			});
			
		}
	});
});
/*
router.post('/search', function (req, res, next) {
    console.log("Search");
    var searchInfo = req.body;
    var query = { address: searchInfo. };
    //let rawdata = fs.readFileSync('cities.json');
    //let Cities = JSON.parse(rawdata);
    //let matches = Cities.filter()
    User.findOne({ unique_id: req.session.userId }, function (err, data) {
        console.log("data");
        console.log(data);
        if (!data) {
            res.redirect('/');
        } else {
            //console.log("found");
            Job.find(function (err, result) {
                console.log("result");
                console.log(result);

                //console.log("found");

                return res.render('data.ejs', { "name": data.name, "email": data.email, "type": data.type, "result": result });

            });

        }
    });
});
*/
module.exports = router;