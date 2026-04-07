<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# minstd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a strided array with pseudorandom numbers generated using a [linear congruential pseudorandom number generator][@stdlib/random/base/minstd] (LCG).



<section class="usage">

## Usage

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-minstd@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray, ndarray, normalized } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-minstd@esm/index.mjs';
```

#### minstd( N, out, so\[, options] )

Fills a strided array with pseudorandom integers between `1` and `2147483646`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
minstd( out.length, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

minstd( 3, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Initial array:
var out0 = new Float64Array( 6 );

// Create offset views:
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill the output array:
minstd( out1.length, out1, 1 );
```

The function accepts the following `options`:

-   **seed**: pseudorandom number generator seed.
-   **state**: an [`Int32Array`][@stdlib/array/int32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var opts = {
    'seed': 12345
};

var out = new Float64Array( 10 );
minstd( out.length, out, 1, opts );
```

#### minstd.ndarray( N, out, so, oo\[, options] )

Fills a strided array with pseudorandom integers between `1` and `2147483646` using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
minstd.ndarray( out.length, out, 1, 0 );
```

The function has the following additional parameters:

-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

minstd.ndarray( 3, out, 2, 1 );
```

The function accepts the same `options` as documented above for `minstd()`.

#### minstd.normalized( N, out, so\[, options] )

Fills a strided array with pseudorandom numbers between `0` and `1`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
minstd.normalized( out.length, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **out**: output array.
-   **so**: index increment for `out`.

The function accepts the same `options` as documented above for `minstd()`.

#### minstd.normalized.ndarray( N, out, so, oo\[, options] )

Fills a strided array with pseudorandom numbers between `0` and `1` using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
minstd.normalized.ndarray( out.length, out, 1, 0 );
```

The function has the following additional parameters:

-   **oo**: starting index for `out`.

The function accepts the same `options` as documented above for `minstd()`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, all functions leave the output array unchanged.
-   All functions support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@esm/index.mjs';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-minstd@esm/index.mjs';

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create an array:
var x1 = zeros( 10, 'float64' );

// Create a list of indices:
var idx = zeroTo( x1.length );

// Fill the array with pseudorandom numbers:
minstd.normalized( x1.length, x1, 1, opts );

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
minstd.normalized( x2.length, x2, 1, opts );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-base/minstd`][@stdlib/random/base/minstd]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="package-name">[`@stdlib/random-array/minstd`][@stdlib/random/array/minstd]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="package-name">[`@stdlib/random-strided/minstd-shuffle`][@stdlib/random/strided/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="package-name">[`@stdlib/random-strided/randu`][@stdlib/random/strided/randu]</span><span class="delimiter">: </span><span class="description">fill a strided array with uniformly distributed pseudorandom numbers between 0 and 1.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-strided-minstd.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-strided-minstd

[test-image]: https://github.com/stdlib-js/random-strided-minstd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-strided-minstd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-strided-minstd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-strided-minstd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-strided-minstd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-strided-minstd/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-strided-minstd/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-strided-minstd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-strided-minstd/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-strided-minstd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-strided-minstd/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-strided-minstd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-strided-minstd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-strided-minstd/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd/tree/esm

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32/tree/esm

<!-- <related-links> -->

[@stdlib/random/array/minstd]: https://github.com/stdlib-js/random-array-minstd/tree/esm

[@stdlib/random/strided/minstd-shuffle]: https://github.com/stdlib-js/random-strided-minstd-shuffle/tree/esm

[@stdlib/random/strided/randu]: https://github.com/stdlib-js/random-strided-randu/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
