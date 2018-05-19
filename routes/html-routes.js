// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/review.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // movies route loads movie-manager.html
  app.get("/movies", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/movie-manager.html"));
  });

 // members route loads member-manager.html
 app.get("/members", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/member-manager.html"));
});

};
