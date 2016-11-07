'use strict';

const fs = require('fs');
const path = require('path');

module.exports.run = (config) => {
    let data = require(path.resolve(config.input));
    /*
    * This is just study example
    * you should never do like this: data[0].elements[0].steps[8].embeddings[0].data;
    * 1. you should use .map to works with array
    * 2. it is useful to use such kind of utility library as https://lodash.com/ or similar
    * to make object's data manipulation elegant and clear
    * */
    let imgString = data[0].elements[0].steps[8].embeddings[0].data;

    var bitmap = new Buffer(imgString, 'base64');
    fs.writeFileSync('exampleOfDecodedScreenshot.png', bitmap);

    throw 'Implement me !!!';
};