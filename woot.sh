#!/bin/bash


vulcanize src/restaurant-reviewer.html --strip-comments --inline-script --inline-css | \
    crisper -h element.v.html -j element.js;
./node_modules/.bin/babel element.js > out.js
