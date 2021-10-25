/**
 * Handles responses and errors
 * @class ResponseView
 */
export default class ResponseView {
   static successVerification(message, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.write(
         '<!DOCTYPE html>' +
            '<html lang="en">' +
            '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<title>About page</title>' +
            `</head><body><h3 style="color:green;">${message}</h3>` +
            '</body></html>',
      );
   }
   static failedVerification(message, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.write(
         '<!DOCTYPE html>' +
            '<html lang="en">' +
            '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<title>About page</title>' +
            `</head><body><h3 style="color:red;">${message}</h3>` +
            '</body></html>',
      );
   }
}
