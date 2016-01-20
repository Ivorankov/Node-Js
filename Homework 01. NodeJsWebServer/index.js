'use strict';

var PORT = 1911;
var http = require('http');
var fs = require('fs-extra');
var formidable = require('formidable');
var uuid = require('uuid');
var imagePath;

var server = http.createServer(
    function (request, response) {
        if ((request.url === '/' || request.url === '') && request.method.toLowerCase() === 'get') {
            fs.readFile('index.html', function (error, file) {
                if (error) {
                    console.log(error);
                } else {
                    response.writeHead(200, {'content-type': 'text/html'});
                    response.end(file);
                }
            });
        }
        else if (request.url === '/content/site/style.css' && request.method.toLowerCase() === 'get') {
            fs.readFile('content/site/style.css', function (error, file) {
                if (error) {
                    console.log(error);
                } else {
                    response.writeHead(200, {'content-type': 'text/css'});
                    response.end(file);
                }
            });
        }
        else if (request.url === '/content/site/bootstrap.min.css' && request.method.toLowerCase() === 'get') {
            fs.readFile('content/site/bootstrap.min.css', function (error, file) {
                if (error) {
                    console.log(error);
                } else {
                    response.writeHead(200, {'content-type': 'text/css'});
                    response.end(file);
                }
            });
        }
        else if (request.url === '/content/site/background.jpg' && request.method.toLowerCase() === 'get') {
            fs.readFile('content/site/background.jpg', function (error, file) {
                if (error) {
                    console.log(error);
                } else {
                    response.writeHead(200, {'content-type': 'image/jpeg'});
                    response.end(file);
                }
            });
        } //this feels rly wrong xD
        else if (request.url === '/images' && request.method.toLowerCase() === 'post') {
            var form = new formidable.IncomingForm();
            form.encoding = 'utf-8';
            form.keepExtensions = false;
            form.on('error', function (error) {
                response.writeHead(500, {'content-type': 'text/plain'});
                response.write(error.message);
                response.end();
            });
            form.parse(request, function (err, fields, files) {
                var fileName = files['files'].name;
                var guid = uuid.v1();
                imagePath = 'images/' + guid + fileName;
                var path = files['files'].path;
                console.log(fileName);
                fs.copy(path, imagePath, function (err) {
                    if (err) {
                        console.error(err);
                    }

                });
            });

            form.on('end', function () {
                fs.readFile('image-view.html', function (error, file) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.writeHead(200, {'content-type': 'text/html'});
                        response.end(file);
                    }
                });
            });
        }
        else if(request.url === '/download' && request.method.toLowerCase() === 'get'){
            fs.readFile(imagePath, function (err, image) {
                if(err){
                    console.log(err);
                }

                response.writeHead(200, {'Content-Type': 'image/jpeg'});
                response.end(image);

            });
        }
        else {
            response.writeHead(404, {'content-type': 'text/plain'});
            response.write(http.STATUS_CODES[404]);
            response.end();
        }
    }).listen(PORT);

console.log('Server is listening on port ' + PORT);