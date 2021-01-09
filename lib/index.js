const Compiler = require('./compiler');
const options  = require('../bundle.config'); // simple bundle config options

new Compiler(options).run();