#! /usr/bin/env node

var f = require('fermata'),
    l = require('line-stream');

if (process.argv.length !== 3) {
    console.error("Usage: linepost <url>");
    process.exit(-1);
}

var url = f.raw({base:process.argv[2]});

process.stdin.pipe(l().on('data',function (line) {
    url.post(line, function (e, d) {
        if (e) throw e;
        else if (d.status.toString()[0] !== '2') throw Error("Bad status code from server ("+d.status+")\n"+d.data);
    });
}));