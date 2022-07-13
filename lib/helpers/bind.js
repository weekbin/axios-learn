'use strict';

// @weekbin annotations - use apply to call a function with arguments
export default function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
