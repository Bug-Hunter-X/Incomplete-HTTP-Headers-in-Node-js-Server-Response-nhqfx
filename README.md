# Incomplete HTTP Headers in Node.js Server Response

This repository demonstrates a common error in Node.js HTTP servers where the response headers are not properly set before writing the response body.  This can lead to unexpected behavior or errors in client applications.

## The Bug

The `bug.js` file contains a simple HTTP server that attempts to send a response without setting the content length or content type header.  This results in an incomplete response that clients may not be able to correctly parse.

## The Solution

The `bugSolution.js` file provides the corrected code, which properly sets the necessary headers (`Content-Type` and `Content-Length`) before writing the response body.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Try accessing the server in a browser or using a tool like `curl`.
5. Observe the potentially unexpected behavior (incomplete response).
6. Run `node bugSolution.js` to see the correct implementation.