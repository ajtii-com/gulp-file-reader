# gulp-file-reader

Gulp plugin to read file and save its content in **Vinyl#contents** property.
See [vinyl](https://github.com/gulpjs/vinyl) package for more details

```js
const read = require('gulp-file-reader');
```

## read([buffer])

* **buffer**: boolean *= true*  
If *true* then puts **content** in *Vinyl#contents* property otherwise
a **stream**

## Example Use Case

```js
const gulp = require('gulp');
const newer = require('gulp-newer');
const read = require('gulp-file-reader');

...

  // Get all .js files but do not read them yet
  return gulp.src('src/**/*.js', { read: false })
      // Pass through just changed files
      .pipe(newer('dist/'))
      // Load their content into Vinyl#contents property
      .pipe(read())
      ...

...
```

See also *index.test.js* file

## Implementation and Issues

This plugin just wraps *lib/src/* **getContents()** function from package
[vinyl-fs](https://github.com/gulpjs/vinyl-fs) for now *(in the future
releases this may change)*.
Please, therefore refer your issues primarily to
[vinyl-fs](https://github.com/gulpjs/vinyl-fs/issues)

## Author

Ajtii Team &lt;ajtii.com@gmail.com&gt;

## MIT License

Copyright (c) 2017 Ajtii Team &lt;ajtii.com@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
