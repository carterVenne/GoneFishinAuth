const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Comment
        .find(req.query)
        .sort
    }
}