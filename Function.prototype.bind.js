/**
 * This is a polyfill of Function.prototupe.bind method.
 */

Function.prototype.myBind = function (context, arguments) {
  let fn = this;

  return function (args2) {
    return fn.apply(context, [...arguments, ...args2]);
  };
};
