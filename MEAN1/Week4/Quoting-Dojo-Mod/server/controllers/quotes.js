const Quote = require("../models/quote.js");

module.exports = {
    index: function(req, res) {
        res.render("index");
    },

    post_quote: function(req, res) {
        let quote = new Quote(req.body);
        quote.save(function(err) {
            if (err) {
                for (let key in err.errors) {
                    req.flash('quote', err.errors[key].message)
                }
                res.redirect('/');
            } else {
                req.flash('success', 'Your quote was successfully added to the database!');
                res.redirect('/quotes');
            }
        });
    },

    get_quotes: function(req, res) {
        let quoteArr;
        query = Quote.find({}, function(err, quotes) {
            quoteArr = quotes;
            res.render('result', {quotes: quoteArr});
        });
    },
}