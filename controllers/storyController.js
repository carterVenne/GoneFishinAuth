const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.story
        .find(req.query)
        .sort
    }
}