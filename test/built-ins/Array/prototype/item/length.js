// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.item
description: >
  Array.prototype.item.length value and descriptor.
info: |
  Array.prototype.item( index )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Array.prototype.item]
---*/
assert.sameValue(typeof Array.prototype.item, 'function');

assert.sameValue(
  Array.prototype.item.length, 1,
  'The value of Array.prototype.item.length is 1'
);

verifyNotEnumerable(Array.prototype.item, 'length');
verifyNotWritable(Array.prototype.item, 'length');
verifyConfigurable(Array.prototype.item, 'length');
