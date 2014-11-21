var request     = require('request');

var apiurl      = 'http://rnv.the-agent-factory.de:8080/easygo2/rest/regions/rnv/modules/';


var rnv = function () {
    this.stations = function (callback) {
        var data = {};
        data.path = 'stations/packages/1';
        getResult(data, function(res){
            callback(res);
        });
    }

    this.tickerCount = function (callback) {
        var data = {};
        data.path = 'ticker/numberOfNewEntries/0'
        getResult(data, function(res){
            callback(res);
        })

    }

    this.newsCount = function (callback) {
        var data = {};
        data.path = 'news/numberOfNewEntries/0'
        getResult(data, function(res){
            callback(res);
        })

    }

    function getResult (data, callback) {
        request.get(apiurl+data.path, function (err, res, body) {
            callback(body);
        });
    }
}

module.exports = rnv;