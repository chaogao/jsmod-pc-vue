let customEvent = function (name) {
  let e = new Event(name);

  e.isPreventDefault = false;

  e.preventDefault = function () {
    e.isPreventDefault = true;
  }

  return e;
}

export { customEvent };
