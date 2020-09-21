# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rghatore/lotide`

**Require it:**

`const _ = require('@rghatore/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element of an array
* `tail`: returns all elements of an array excluding the first
* `middle`: returns the middle elements of an array. For odd number of elements, output is [middle]. For even number of elements, output is [middle1, middle2]
* `countLetters`: returns the number of times a particular letter appears in a string
* `countOnly`: returns number of times particular items show up in and object
* `findKey`: returns the first key which has a truthy value in an object
* `findKeyByValue`: returns the first key associated with value
* `letterPositions`: returns the index values where a particular letter appears in a string
* `map`: returns an array after running a function on its elements
* `takeUntil`: returns an array with elements from an array until it reaches the callback truthy value
* `without`: removes the elements of an array based on another array