const http = require('http');
const fs = require('fs');
const { join } = require('path');
const _ = require('lodash');

const server = http.createServer((req,res) => {
    
    //loadash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    // set header content type
    res.setHeader('Content-type', 'text/html');    // we can also send a plain text here in place of html but sending a line by line becomes messy lets learn how do we send it as a html page itself

    let path = './Chapter_3/';
    switch(req.url){
        case '/':
            path +='3_index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path +='about.html';
            res.statusCode = 200;
            break;
        case '/about-me':            // redirecting about-me to about using response header
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode = 404;
    }

    // sending html file as response
    fs.readFile(path, (err,data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //res.write(data);
            res.end(data);    
        }
    });
});

server.listen(3000,'localhost',() =>{                        // local host is like a domain name
    console.log('listening for requests on port 3000');      // server needs port numbers for communication and 3000 is common for using in our own computer
}); 

// Status codes:
    // 200: OK
    // 301: Resource moved
    // 404: Not found
    // 500: Internal server error

    // 100 Range - Information responses
    // 200 Range - success codes
    // 300 Range - Codes for redirects 
    // 400 Range - User or client error codes 
    // 500 Range - Server error Codes





// ------------------- Can use Express for easily assignning html pages will learn in Chapter 4--------------------
//--------------------------------------Net Ninja Video 3 and 4 ---------------------------------------------------
