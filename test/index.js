'use strict';

let wait = require('../lib');
let assert = require('assert');

describe('Wait function simple test', () => {

  //----------------------------------------------------------------------------
  it('1 second should have ellapsed', () => {
    let before = new Date().getTime();
    wait(1000);
    let now = new Date().getTime();
    let diff = now - before;
    assert(diff >= 1000);
  });
});