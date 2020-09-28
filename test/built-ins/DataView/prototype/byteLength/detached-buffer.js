// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-dataview.prototype.bytelength
description: Returns 0 if the instance has a detached buffer
info: |
  get DataView.prototype.byteLength
  ...
  If IsDetachedBuffer(buffer) is true, return 0.
  ...
includes: [detachArrayBuffer.js]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);

assert.sameValue(sample.byteLength, 0);
