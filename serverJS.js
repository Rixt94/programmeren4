// comentaar

let http = require('http');

function onRequest(request, resonse) {
    console.log("Er was een request");
    resonse.writeHead(200, {'Content-Type': 'application/json'});
    let result = JSON.stringify({
        'fname': 'fjsjkk',
        'flast': 'jdhai'
    });
    //resonse.write(JSON.stringify(result));
    resonse.end(result);
}

http.createServer(onRequest).listen(3000);
console.log("De server luistert op poort 3000");