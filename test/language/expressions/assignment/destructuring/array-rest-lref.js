// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Reference is evaluated during assignment
info: |
    ArrayAssignmentPattern : [ Elisionopt AssignmentRestElement ]

    [...]
    5. Let result be the result of performing
       IteratorDestructuringAssignmentEvaluation of AssignmentRestElement with
       iteratorRecord as the argument
    6. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
       result).

    AssignmentRestElement[Yield] : ... DestructuringAssignmentTarget

    1. If DestructuringAssignmentTarget is neither an ObjectLiteral nor an
       ArrayLiteral, then
       a. Let lref be the result of evaluating DestructuringAssignmentTarget.
       b. ReturnIfAbrupt(lref).
    [...]
features: [Symbol.iterator]
es6id: 12.14.5.2
esid: sec-runtime-semantics-destructuringassignmentevaluation
---*/

var nextCount = 0;
var returnCount = 0;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;
  }
};
var obj = {};
iterable[Symbol.iterator] = function() {
  return iterator;
};

[...obj['a' + 'b']] = iterable;

assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
assert(!!obj.ab);
assert.sameValue(obj.ab.length, 0);
