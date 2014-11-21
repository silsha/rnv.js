var request     = require('request');
var querystring = require('querystring');

var apiurl      = 'http://rnv.the-agent-factory.de:8080/easygo2/rest/regions/rnv/modules/';


var rnv = function () {
    this.stations = function (callback) {
        var data = {};
        data.path = 'stations/packages/1';
        getResult(data, function(res){
            callback(res);
        });
    }

    this.stationmonitor = function(query, callback) {
        var data = {};
        data.query = query;
        data.path = "stationmonitor/element";
        getResult(data, function(res){
            callback(res);
        })
    }

    this.lines = function(query, callback) {
        var data = {};
        data.query = query;
        data.path = "lines";
        getResult(data, function(res){
            callback(res);
        })
    }

    this.ticker = function (callback) {
        var data = {};
        data.path = 'ticker/'
        getResult(data, function(res){
            callback(res);
        })

    }

    this.tickerCount = function (callback) {
        var data = {};
        data.path = 'ticker/numberOfNewEntries/0'
        getResult(data, function(res){
            callback(res);
        })

    }

    this.news = function (callback) {
        var data = {};
        data.path = 'news/'
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
        var query = "";
        if(data.query)
            query = "?" + querystring.stringify(data.query);
        console.log(apiurl + data.path + query)
        request.get(apiurl + data.path + query, function (err, res, body) {
            callback(body);
        });
    }
}

module.exports = rnv;