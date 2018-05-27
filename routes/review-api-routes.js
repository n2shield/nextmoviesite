// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the reviews
  app.get("/api/reviews", function(req, res) {
    var query = {};
    if (req.query.movie_id) {
      query.MovieId = req.query.movie_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Movie
    db.Review.findAll({
      where: query,
      include: [db.Movie]
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/reviews/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Movie
    db.Review.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Movie]
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // POST route for saving a new post
  app.post("/api/reviews", function(req, res) {
    db.Review.create(req.body).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // DELETE route for deleting reviews
  app.delete("/api/reviews/:id", function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // PUT route for updating reviews
  app.put("/api/reviews", function(req, res) {
    db.Review.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbReview) {
      res.json(dbReview);
    });
  });
}
