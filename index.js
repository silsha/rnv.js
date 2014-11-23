(function (module) {

    /******************************
     * Constant definitions.
     ******************************/

    /**
     * Default user agent for HTTP requests.
     */
    const DEFAULT_UA = 'easy.GO Client Android v1.2.1 (Mozilla/5.0 (Linux; Android 4.4.4; Nexus 4 Build/KTU84Q) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36)';

    /**
     * Default API endpoint.
     */
    const API_URL = 'http://rnv.the-agent-factory.de:8080/easygo2/rest/regions/rnv/modules/';

    /**
     * Default client config.
     */
    const DEFAULT_CONFIG = {
        userAgent: "default"
    };

    "use strict";

    /******************************
     * Module imports.
     ******************************/

    var request = require('request');
    var querystring = require('querystring');

    /******************************
     * API client.
     ******************************/

    var rnv = function (opts) {

        if (!opts) {
            opts = DEFAULT_CONFIG;
        }

        var proxy = opts.proxy;
        var userAgent = opts.userAgent;

        if ("default" == userAgent) {
            userAgent = DEFAULT_UA;
        }

        this.stations = function (callback) {
            var data = {};
            data.path = 'stations/packages/1';
            getResult(data, callback);
        }

        this.stationMonitor = function (query, callback) {
            var data = {};
            data.query = query;
            data.path = "stationmonitor/element";
            getResult(data, callback);
        }

        // For compatiblity reasons.
        this.stationmonitor = this.stationMonitor;

        this.lines = function (query, callback) {
            var data = {};
            data.query = query;
            data.path = "lines";
            getResult(data, callback);
        }

        this.ticker = function (callback) {
            var data = {};
            data.path = 'ticker/'
            getResult(data, callback);
        }

        this.tickerCount = function (callback) {
            var data = {};
            data.path = 'ticker/numberOfNewEntries/0'
            getResult(data, callback);
        }

        this.news = function (callback) {
            var data = {};
            data.path = 'news/'
            getResult(data, callback);
        }

        this.newsCount = function (callback) {
            var data = {};
            data.path = 'news/numberOfNewEntries/0'
            getResult(data, callback);
        }

        function getResult(data, callback) {
            var query = "";
            if (data.query)
                query = "?" + querystring.stringify(data.query);

            var url = API_URL + data.path + query;
            request.get({url: url, json: true, proxy: proxy}, function (err, res, body) {
                callback(body);
                //callback(err, body);
            });
        }
    }

    /******************************
     * Module exports.
     ******************************/

    /**
     * Factory method for API client.
     */
    function createClient (opts) {
        var client = new rnv(opts);
        return client;
    }

    module.exports = rnv;
    module.exports.createClient = createClient;

})(module);