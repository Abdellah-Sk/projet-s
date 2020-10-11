const express = require('express'),
bodyParser = require('body-parser'),
nodeMailer = require('nodemailer');

const server = express();

// add middleware to parse the json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));

// Set up routes
server.post('/send-email', async (req, res, next) => {
    try {
        
        let {
            niveau,
            filiere,
            matiere,
            nomprenom,
            email,
            telephone,
            creneaux,
            messsage
        } = req.body;
        
        console.log(req.body)
        
        if (!email) {
            return res.status(400).send({
                "error": {
                    "message": " Email requied"
                }
            });
        }
        
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'microdidac.corp@gmail.com',
                pass: 'test'
            }
        });
        let mailOptions = {
            from: '"CodesQuery" <microdidac.corp@gmail.com>',
            to: "microdidac.corp@gmail.com",
            subject: 'Pour Reussir Site Web : Demande Informations',
            html: '<b>'+ niveau +'</b>' + " " +
            "<br>" + 
            '<b>'+ filiere +'</b>' + " " +
            "<br>" + 
            '<b>'+ matiere +'</b>' + " " +
            "<br>" + 
            '<b>'+ nomprenom +'</b>' + " " + 
            "<br>" + 
            '<b>'+ email +'</b>' + " " +
            "<br>" + 
            '<b>'+ telephone +'</b>' + " " +
            "<br>" + 
            '<p>'+ creneaux +'</p>' + " " +
            "<br>" + 
            '<p>'+ messsage +'</p>'
        };
        
        transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                throw new error('Something went wrong')
            }
            console.log(data);
            return res.status(200).send({
                "status": true,
                "message": "Email Send Successfully."
            });
        });
        
    } catch (err) {
        console.log(err);
        return res.status(200).send({
            "error": {
                "message": "Something went wrong"
            }
        });
    }
});

server.get('*', (req, res, next) => {
    next();
});


// catch 404 error
server.use(function (req, res, next) {
    const err = new Error('Requested URL Not Found !');
    err.status = 404;
    next(err);
});

//Error handler
server.use(function (err, req, res, next) {
    res.locals.message = err.message;
    
    // render the error page
    res.status(err.status || 500);
    res.send({
        "error": {
            "message": res.locals.message
        }
    });
});

server.listen(5000, function () {
    console.log('Express server listening on - http://' + 'localhost' + ':' + 5000);
});