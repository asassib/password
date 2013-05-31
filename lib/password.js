// Generated by CoffeeScript 1.6.2
(function() {
  var wordlist;

  wordlist = require('./wordlist.json').wordlist;

  module.exports = function(l) {
    var i, words;

    words = (function() {
      var _i, _results;

      _results = [];
      for (i = _i = 1; 1 <= l ? _i <= l : _i >= l; i = 1 <= l ? ++_i : --_i) {
        _results.push(wordlist[Math.floor(Math.random() * wordlist.length)]);
      }
      return _results;
    })();
    return words.join(' ');
  };

  module.exports.wordlist = wordlist;

}).call(this);