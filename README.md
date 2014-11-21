rnv.js
======

Request Rhein-Neckar-Verkehr (RNV) travel data with node.js.

Installation
------------

`npm install rnv.js`

Usage
-----

```
var rnv = require('rnv.js');
var api = new rnv();

// get station list
api.stations(function(res){
	console.log(res);
});

// query station data
var stationmonitorquery = {
	"hafasID": "116",
	"transportFilter": "4",
	"time": "null"
}

api.stationmonitor(stationmonitorquery, function(res){
	console.log(res);
});

// query line data
var linesquery = {
	"hafasID": "116",
	"lineID": "4",
	"stopIndex": "0",
	"tourType": "452",
	"tourID": "7,38665",
	"time": "03:03"
}

api.lines(linesquery, function(res){
	console.log(res);
});

// get ticker entries
api.ticker(function(res){
	console.log(res);
});

// get number of ticker entries
api.tickerCount(function(res){
	console.log(res);
});

// get news entries
api.news(function(res){
	console.log(res);
});

// get number of news entries
api.newsCount(function(res){
	console.log(res);
});

```

License
-------

Copyright © 2014 silsha &lt;hallo@silsha.me&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.