#!/usr/bin/env node
'use strict';
var meow = require('meow');
var halftoneTranscode = require('./');

var cli = meow({
  help: [
    'Usage',
    '  halftone-transcode <input>',
    '',
    'Example',
    '  halftone-transcode Unicorn'
  ].join('\n')
});

halftoneTranscode(cli.input[0]);
