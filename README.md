# drop-comments

## Remove comments from string

## Installation

```bash
npm install drop-comments
```

## Useage

```javascript
var DC = require('drop-comments');

DC('// comments\nvar a = 1;', type)
```

## Options

type:

- first
- block
- line

If not set, the default is all

## Demo

```bash
node ./demo/runthis.js
```

*Thanks extract-comments*