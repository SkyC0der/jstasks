var http = require('http');
var fs = require('fs');
var contact_form = `
<html lang="en">
<body>
    <h1>Talk to Me</h1>
    <form action="/message" method="post">
        <label for="Message">Message: </label><br>
        <textarea class="input" id="message" name="message" rows="4" autofocus></textarea><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`

var server = http.createServer(function (req, res) {
    if (req.method === 'POST'){
        var body = '';
        req.on('data', data => {
          body += `${data} \n`
        });
        req.on('end', () => {
          fs.writeFile('message.txt', body, err => {
            if (err) throw err;
          });
          res.write(contact_form);
          res.end()
        });
      } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(contact_form);
          res.end();
        }
    }).listen(8080);
    
