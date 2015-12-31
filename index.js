'use strict';

var extend = require('extend-object');
var espree = require('espree');

var allowedType = ['first', 'block', 'line'];

var options = {
    beautify: false
};

var parseComments = function (content) {
    var res = {
        first: [],
        block: [],
        line: []
    };

    var source = espree.parse(content, {
        range: true,
        comments: true,
        attachComment: true
    });

    var comments = source.comments;

    if (comments.length) {
        if (source.range[0] > comments[0].range[0]) {
            res.first = comments.splice(0, 1);
        }

        comments.forEach(function (c) {
            if (c.type === 'Block') {
                res.block.push(c);
            } else if (c.type === 'Line') {
                res.line.push(c);
            }
        });
    }

    return res;
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

    var rule = parseComments(content);

    type.forEach(function (t) {
        if (rule[t].length) {
            rule[t].forEach(function (c) {
                content = content.slice(0, c.range[0]) + ' '.repeat(c.range[1] - c.range[0]) + content.slice(c.range[1]);
            });
        }
    });

    opts = extend({}, options, opts || {});

    return opts.beautify
        // remove empty line, strip multi-line
        ? content.replace(/[\s]+(\n)/g, '$1').replace(/\n+/g, '\n\n').replace(/^\n+/, '\n')
        : content;
};