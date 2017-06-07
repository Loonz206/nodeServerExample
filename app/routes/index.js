//routes/index.js

const noteRoutes = require('./note_routes.js');

module.exports = function (app, db) {
    noteRoutes(app, db);
    // Other routes groups can go here, in the future
};