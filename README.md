# Web-based PACS Viewer

A PACS viewer that renders X-Ray images for annotation.

## Installation Guide

You'll be running both the client and the server on separate windows or terminals, however you wish. Enter both `client/` and `server/` and run `npm install`.

Run `npm start` in your client terminal/window. Run `node app.js` in your server terminal/window.

## Usage

The server terminal will output any data that is posted to the endpoint `/images/:id`, for `id` is the `SOPInstanceUID` for an image.