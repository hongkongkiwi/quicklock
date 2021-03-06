#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var json_parser_1 = require("./json-parser");
process.stdin.resume()
    .pipe(json_parser_1.createParser()).on(json_parser_1.eventName, function (v) {
    console.log('json received in lock holder...', JSON.stringify(v));
    if (v.releaseLock === true && v.isRequest === true && v.lockName) {
        console.log(JSON.stringify({ quicklock: true, isResponse: true, lockName: v.lockName, released: true }));
        console.log(v.lockName);
        console.log('released.');
    }
    else {
        console.error('no action taken in lock holder receiver.');
    }
});
