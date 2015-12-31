'use strict';

var extractComments = require('extract-comments');
var extend = require('extend-object');

var allowedType = ['block', 'line'];

var options = {
    beautify: true
};

module.exports = function (content, type, opts) {

    if (content == null) {
        return '';
    }

    if (!type)
        type = allowedType;
    else if (!(type instanceof Array))
        type = [].concat(type);

    type = type.filter(function (t) {
        return !!t && allowedType.indexOf(t) > -1 ? true : false;
    });

    opts = extend({}, options, opts || {});

    function filter(type, content) {

        if (!(type in extractComments))
            return content;

        var start = 0,
            end = 0,
            _C = [];

        extractComments[type](content).forEach(function (comment) {
            end = comment.loc.start.pos;
            start !== end && _C.push(content.slice(start, end));
            start = comment.loc.end.pos;
        });

        _C.push(content.slice(start));

        return _C.join('');
    }

    content = content.replace(/\r\n|\r/g, '\n');

    type.forEach(function (type) {
        content = filter(type, content);
    });

    return opts.beautify
        // remove empty line, strip multi-line
        ? content.replace(/[\x20\t]+(\n)/g, '$1').replace(/\n+/g, '\n\n').replace(/^\n+/, '\n')
        : content;
};