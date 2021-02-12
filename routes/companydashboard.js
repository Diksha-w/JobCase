var express = require('express');
var router = express.Router();
var Company = require('../models/company');
var Job = require('../models/job');

router.get('/dashboard', function (req, res, next) {
	console.log("profile");
	Company.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/company/');
		}else{
			//console.log("found");
			return res.render('companyprofile.ejs', {"name":data.name,"email":data.email,"role":data.role});
		}
	});
});

// Post Job By Recruiter
router.get('/postJob', function (req, res, next) {
    return res.render('jobform.ejs');
});
router.post('/postJob', function (req, res, next){
    console.log(req.body);
    var jobInfo = req.body;


    if (!jobInfo.email) {
        res.send();
    } else {
            
        var newJob = new Job({
                            unique_id: Jobs.find().Count()+1,
                            email: jobInfo.email,
                            name: jobInfo.name,
                            title: jobInfo.title,
                            location: jobInfo.location,
                            description: jobInfo.description,
                            duration: jobInfo.duration,
                            salary: jobInfo.salary,
                            userid: jobInfo.userid,
                        });

                        newJob.save(function (err, Job) {
                            if (err)
                                console.log(err);
                            else
                                console.log('Success');
                        });

                    res.redirect('/dashboard')
            };
        
    
});
module.exports = router;